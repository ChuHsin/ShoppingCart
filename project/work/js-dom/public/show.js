(function IIFE() {
    const list = document.querySelector('.inventory');
    const addButton = document.querySelector('.addbutton');
    const inputArea = document.querySelector('input');



addButton.addEventListener('click', function() {
    if(inputArea.value && addButton) {
    const el = document.createElement('li');
    const right = document.createElement('span');
    let quantity = parseInt(0);

    const minusButton = document.createElement("button");
    const plusButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const quantityTag = document.createElement('span'); 
    quantityTag.innerHTML=`${quantity}`;
    minusButton.innerText="-";

    plusButton.innerText="+";
    deleteButton.innerText="X";
    el.innerHTML = `<span class="name" >${inputArea.value}</span>`
    right.setAttribute('class','quantityCol');
    right.appendChild(minusButton); 
    right.appendChild(quantityTag);
    right.appendChild(plusButton);
    right.appendChild(deleteButton);
    el.appendChild(right);
    list.appendChild(el);
    inputArea.value='';
    addButton.disabled=true;
    minusButton.setAttribute('disabled','true');
    minusButton.addEventListener('click',(e) => {

        if(quantity > 0){
        quantity = parseInt(quantity) - 1;
        quantityTag.innerText = quantity;
        }
        minusButton.disabled = !(quantity>0);
        
    })

    plusButton.addEventListener('click',(e) => {
        quantity = parseInt(quantity) + 1;
        quantityTag.innerText = quantity;
        minusButton.disabled = !(quantity>0);
    })
    deleteButton.addEventListener('click',(e) => {
            el.remove();
    });
}
})

})();

function success() {
    if(document.querySelector("input").value==="") { 
        document.querySelector('.addbutton').disabled = true; 
       } else { 
        document.querySelector('.addbutton').disabled = false;
       }
   }
