# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q1: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.

It means the URL shoule be a noun, represent a "resource" to interact with, HTTP method as interaction verb to interact with the resource.

Example of url DOES not represent a resource:
    /addStudent/    ------>  `POST /student`
    /updateInventory/    ------->  `PATCH /inventory`
    /searchClass/    ------->  `GET /class`


## Q2: If the service returns the username as a plain text string, what is wrong with the below and what would fix it? (Assume the service works without error)
```
  const username = fetch('/username');
  console.log(`user is named ${username}`);
```  
`fetch('/username')` will return a Promise but not a value, so it cannot be console.log out as a variable. The response of fetch could be access through a async way.

FIX:
```javascript
  fetch('/username')
  .then( response => {
    const username = response;
    console.log(`user is named ${username}`);
  })
```

## Q3: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

It means "Read the DOM te recapture the state" because it makes updating the code become much complexly. The screen is the visual output, if you alter the display you change how to get the list. As the display becomes more complicated, the state interaction becomes complicated too.

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

For multiple-page-web application, it use form to pass data around and servers return html for the application.
For single-page-web, it pass json data with server and manipulate the current page, not using page load for new content.

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

Taking a non-client-side JS web app and augmenting it with JS. For an SPA that uses Progressive Enhancement, it remains working if no client-side JS, so that it works for more devices and have more accessibility. It also ensuring a secure backend.


## Q6: Explain how a REST service is or is not similar to a dynamic asset.

The REST service and dynamic asset are both using request and response to make the interactions between client and server. The difference is, REST service pass json data and status with server, then manipulate DOM. Dynamic assest is using page load to get new content from server.

## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

Application state, it is because user might be using multiple tabs.

## Q8: Explain why it is useful to separate a function that fetches data from what you do with that data

At first, it makes the code more readable. It also makes the functions not touching any HTML, it does not change if the HTML changes. It simplifies the function, let the caller to decide how to react with the data. It makes the code resuable for different purposes.

## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)

It is because the try-catch will done before the code that is inside asynchronous method start to run.

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.

It is a issue for both front end side and server-side. For the front-end side, for instance, we should seperate functions that send request with the functions which deal with the data. For the server-side, we can seperate http methods with storage objects.

