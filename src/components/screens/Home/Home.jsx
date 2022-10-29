import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoFile from './create-todo-file/CreateTodoFile'

const data = [
	{
		_id: 'wefw23',
		title: 'Customize VS Code',
		isCompleted: false,
	},
	{
		_id: 'wefw23232',
		title: 'Create React App',
		isCompleted: false,
	},
	{
		_id: 'wefw2qwefcev3',
		title: 'Make a To-Do List',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => {
		setTodos([...todos].filter(t => t._id !== id))
	}

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2x1 font-bold text-center mb-8'>To-Do</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoFile setTodos={setTodos} />
		</div>
	)
}

export default Home
