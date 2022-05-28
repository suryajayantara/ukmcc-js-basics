const todos = [
    {
        id : 1,
        task : 'Buy Toothpaste',
        isCompleted : true,
        
    },
    {
        id : 2,
        task : 'Meeting With Client',
        isCompleted : true,
        
    },
    {
        id : 3,
        task : 'Attandance a Javascript Workshop',
        isCompleted : false 
    }
];

/*
For [Simple]
    for(let i=0;i<10;i++){
        console.log('There A Looping Examples');
    }
    While [Simple]
    let i = 0;
    while(i < 10){
        console.log('There a While Examples');
        i++;
    }
*/

/*
Looping Todos Simple Method (FOR)

    1. With Array Lenght
    for(let i = 0 ; i < todos.length;i++){
        console.log(todos[i].task);
    }

    2 With Simple For
    for(let todo of todos){
        console.log(todo.id);
    }

*/

/*
Looping data using High Order Array Function, when using high order function , you need a callback function
Parameters List 
1) Variable you wanna use ase a each a items

List Of High Order Function

1)  forEach => for looping a array
    todos.forEach(function(todo) {
        console.log(todo.task);
    });

2) map => for create new array from array
    const todoTask = todos.map(function(items) {
    return items.task;
})

3) filter => create new array based on a condition 
    const todoComplete = todos.filter(function(items){
        return items.isCompleted === true;
    });


    // Now Let's get only the task name
    const todoComplete = todos.filter(function(items){
        return items.isCompleted === true;
    }).map(function(items){
        return items.task;
    });

*/






