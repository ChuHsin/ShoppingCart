(function(){
const list = document.querySelector('.example');
const  status = document.querySelector('.status');
const addButton =  document.querySelector('.add-button');
window.refresh = refresh;
window.deleteMethod = deleteMethod;
window.updateMethod = updateMethod;

document.querySelector("body").addEventListener("load", refresh());


addButton.addEventListener('click', function() {
    
    const entered =  document.querySelector('.item-name');
    const quantity = document.querySelector('.item-quantity');
    const itemId = Math.floor(Math.random()*10000);
    
fetch('/items/', {
    method: 'POST',
    headers: new Headers ({
        'content-type' : 'application/json'
    }),
    body: JSON.stringify({ 
        id : `${itemId}`,
        name : `${entered.value}`,
        quantity: `${quantity.value}`
    })
    })
    .then(response => response.json())
    .then(data => {
       console.log('Success:', data);
     })
     .catch((error) => {
       console.error('Error:', error);
     })
    
    entered.value='';
    addButton.disabled=true;
    refresh();
    }
)



        function refresh(){
            document.querySelector('.example').innerHTML = `<li>Loading...</li>`;
            fetch('/items/')
            .then( response => {
                if(response.ok) {return response.json();}
                return  response.json().then(err => Promise.reject(err));
            })
            .then( items => {
                for( key in items) {
                     document.querySelector('.example').innerHTML += 
                      `<li class="${items[key].id}">
                      <span class="itemName">${items[key].name}</span>
                      <span class="itemQuantity"> ${items[key].quantity}</span>
                      <button onclick="deleteMethod(${items[key].id})">Delete</button>
                      <button onclick="updateMethod(${items[key].id})">Update</button>
                      </li>`
                }
                document.querySelector('li').remove();
                
            })
            .catch(err => status.innerText = err.error );
            document.querySelector('.item-name').value="";
        }

        function deleteMethod(itemId){
            fetch('/items/'+itemId , {
                method: 'DELETE',
                headers: new Headers ({
                    'content-type' : 'application/json'
                })
            })
            refresh();
            console.log(itemId + 'deleted');
        }

        function updateMethod(itemId){
            const newQuantity = document.querySelector('.item-quantity');
            fetch('/items/'+itemId , {
                method: 'PATCH',
                headers: new Headers ({
                    'content-type' : 'application/json'
                }),
                body: JSON.stringify({ 
                    quantity: `${newQuantity.value}`
                })
            })
            refresh();
            console.log(itemId + 'updated');

        }


    })();
    function success() {
        if(document.querySelector(".item-name").value==="") { 
            document.querySelector('.add-button').disabled = true; 
           } else { 
            document.querySelector('.add-button').disabled = false;
           }
       }