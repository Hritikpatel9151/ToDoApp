import React, { useState } from 'react'

interface ToDo{
    id:number;
    text:string;
}

const ToDo = () => {
    const [todo,setTodo]=useState<string>('');
    const [todos,setTodos] = useState<ToDo[]>([]);

    const handleAddTask = () => {
        if(todo.trim() === '') return;
        setTodos([...todos,{id:Date.now(),text:todo}]);
        setTodo('');
    }
  return (
    <>
       <div className="min-h-screen  flex flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          ✅ To-Do App
        </h1>

       
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a new task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2  focus:ring-indigo-400 transition"
          />
          <button
            onClick={handleAddTask}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Add
          </button>
        </div>

        
        <ul className="mt-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-md p-3 my-2 hover:bg-gray-100 transition"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default ToDo
