const addButton = document.querySelector('.add-button');
let input = document.querySelector('.input');
const container = document.querySelector('.container');
const date = document.querySelector('.date');
let listItem=[];
let id=0;
let item ;

//today date
const option = { year: "numeric", weekday: "long", month: "short", day: "numeric" };
const today = new Date();
date.style.color = 'white';
date.innerHTML = today.toLocaleDateString("en-US", option);
//item object
function Item(itemName, id) {
    this.itemName = itemName;
    this.id = id
    this.CreateDiv = () => {
        //get data and some attributes
        let input = document.createElement('input');
        input.value = this.itemName;
        input.disabled = true;
        input.classList.add('item-input')
        input.type = 'text'
        //create div for each item
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        //Edit Button
        let btnEdit = document.createElement('button');
        btnEdit.classList.add('edit-button');
        let edit = document.createElement('i');
        edit.classList.add("fa");
        edit.classList.add("fa-edit");
        btnEdit.appendChild(edit);
        //Remove Button
        let btnRemove = document.createElement('button');
        btnRemove.classList.add('remove-button');
        let trash = document.createElement('i');
        trash.classList.add("fa");
        trash.classList.add("fa-trash");
        btnRemove.appendChild(trash);
        //Appening to Children
        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(btnEdit);
        itemBox.appendChild(btnRemove);

        btnEdit.addEventListener('click', () => {
            input.disabled = !input.disabled;
            input.style.textDecoration = "none";
            btnEdit.style.opacity = "1";

        });
        btnRemove.addEventListener('click', (event) => {
            container.removeChild(itemBox);
        });
       

    }
}
function check() {
    let input = document.querySelector('.input');

    if (input.value !== "" && input.value !== undefined) {
       item = new Item(input.value, id++);
        item.CreateDiv()
       
      
    }
}
addButton.addEventListener('click', check);


addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
});


