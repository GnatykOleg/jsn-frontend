import { createAction } from '@reduxjs/toolkit';

const addTask = createAction('tasks/AddTask');

console.log(addTask('Learn Redux Toolkit'));
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

// У генератора экшена есть свойство type
console.log(addTask.type); // "tasks/AddTask"

// Метод toString() функции addTask был переопределен
console.log(addTask.toString()); // "tasks/AddTask"
