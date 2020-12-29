# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q1: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)

Avoiding heavy nesting;
Modularize — each function only process one task;
Keep DOM access to a minimum, do not read data from DOM.

## Q2: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

AS SPA does not load pages, a single page may stay open for a long time, this increases the chance of memory leaks, which can cause the browser to crash, and increase battery cost.

## Q3: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain.  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and the page makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  hint: This should list and describe multiple request/response steps, and be clear where the request is coming from and where the response is received.

`http://localhost:3000` calls `/service` send request -> 
proxy get `/service` request-> 
proxy send `/service` request to `http://localhost:4000`->
 server on `http://localhost:4000` get request -> 
 server on `http://localhost:4000` processed and send `/service` response -> 
proxy get `/service` response ->
 proxy send `/service` response ->
 `http://localhost:3000` get `/service` response

## Q4: Follow-up: Using the above scenario, list and describe what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

`http://localhost:4000` calls `/service` send request -> 
 server on `http://localhost:4000` get request -> 
 server on `http://localhost:4000` processed and send `/service` response -> 
 `http://localhost:4000` get `/service` response

## Q5: I have said that you can only pass data "down" in React, not "up".  What does that mean?  Give simple code sample if that makes it easier to describe.

You can only pass data from parent component as prop to its children components but not from child component to its parent component.

In parent component:
```javascript
import React, {useState} from 'react';
import LittleBrother from './LittleBrother';
function BigBrother(){
    const [data, setData] = useState('');
    // passing data from parent component to child component
    let info = <LittleBrother data={data} setData={(data) => setData(data)}> 
}

```
In child component:
```javascript
import React, {useState} from 'react';
function LittleBrother({data, setData}){ // get data passed from parent component
// data created in child component cannot pass to its parent or other upper components
    const [info, setInfo] = useState('');
}

```

## Q6: Follow-up: If you can't pass data "up" the component tree, how can anything that is "down" change data?  Give simple code samples if that makes it easier to describe.

"Down" component can use set state function which is one of props passed from upper components to change data.

In parent component:
```javascript
import React, {useState} from 'react';
import LittleBrother from './LittleBrother';
function BigBrother(){
    const [data, setData] = useState('');
    // passing data from parent component to child component
    let info = <LittleBrother data={data} setData={(data) => setData(data)}> 
}

```
In child component:
```javascript
import React, {useState} from 'react';
function LittleBrother({data, setData}){ // get data passed from parent component
    const [info, setInfo] = useState('');

setData('new data here'); // use function passed from upper component to change data

}
```

## Q7: Imagine you have a collection of student records, with each having a student id, a name, and an address. (an example of one item in the collection would be: { id: "654321", name: "Bao", address: "123 Main Street" })  Imagine you also have collection of steps to create a pizza, with each step having an ingredient, a quantity, and an instruction. (an example of one item in the collection would be the object { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" })

Give a code sample where each collection is shown with at least one more element (2+ students for the first collection, 2+ pizza-making steps).  Make sure you make proper use of arrays and objects.  Explain why you've chosen each way of making a collection (e.g. Why you use an array for one or both, or why you use an object for one or both)

Student: Object
```javascript
const student = {
    Bao: {
        id: "654321",
        name: "Bao",
        address: "123 Main Street",
    },
    Amy: {
        id: "654320",
        name: "Amy",
        address: "321 Main Street",
    },
}
```
Reason: Each student have their specific key like "id", it is easy to use key to find each student and access to its properties. Usually, managing students do not have order concerns.

Pizza-making Steps: Array
```javascript
const steps = [
    {
    qty: "1 cup", 
    ingredient: "shredded cheese", 
    instructions: "sprinkle over pizza"
    },
    {
    qty: "1 tablespoon", 
    ingredient: "olive oil", 
    instructions: "brush over pizza"
    },
]
```
Reason: Pizza making steps should follow an order, and each steps might not have specific key to determine it.


## Q8: How does inheritance in JS relate to a prototype?  Give a simple code sample if it helps explain.

All inheritance in JS uses prototype.
JS only has one construct for inheritance which is **object**, each object link to another object with a private property called **prototype**. The prototype has its own prototype until reach the end of prototype chain.

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

```javascript
function BigBoss({ grade, name } = {} ) { // create an object
    this.grade = grade || 'default';
    this.name = name || 'unnamed';
};

BigBoss.prototype.fire = function() { // obeject has its prototype, and method of prototype.
    console.log('You Are Fired');
};

const knowingKing = new BigBoss(); // assigned the prototype and called constructor
knowingKing.fire(); // the object inherited method of prototype.
```

## Q9: What is wrong about this code sample? `if( !username || username == undefined) { ` be sure to explain why that is wrong.

In this sample, if `username == undefined`, `!username == true` and run code inside if block, the part after `||` is useless and will never be reached. So, `username == undefined` should be placed before `||`.

## Q10: In your own words, what is decoupling?  What is an example of decoupling in a React app?  Why is this beneficial?

Decoupling means seperating some relative stuff to different parts.
In React app, we write all fetch calls in `services.js` instead of just in each component. Components only dealing with the result which have been processed by fetch function, then render the page.
It makes the whole code more readable and maintainable.

