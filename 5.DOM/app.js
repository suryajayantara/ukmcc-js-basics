// Selector for ID
let byIdSelector = document.getElementById('id');
let byIdQuery = document.querySelector('#id');

// Selector for Class
let byClassSelector = document.getElementsByClassName('desc');
let byClassQuery = document.querySelector('.greeting');

// Selector for TagName
let byTagNameSelector = document.getElementsByTagName('button');
let byTagNameQuery = document.querySelector('button');

// Form
let todoForm = document.querySelector('#todos');
let form = document.querySelector('#form-data');
let list = document.querySelector('#user-list');
form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(todoForm.value == ''){
        alert('Field todos empty');
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${todoForm.value}`));
        list.appendChild(li);

        todoForm.value = '';
    }



}
