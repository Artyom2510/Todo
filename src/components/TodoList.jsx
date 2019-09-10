import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {

	const els = todos.map((item) => {
		return (
			<li>
				<TodoListItem {...item} />
			</li>
		);
	});

	return (
		<ul>
			{ els }
		</ul>
	);
};

export default TodoList;
