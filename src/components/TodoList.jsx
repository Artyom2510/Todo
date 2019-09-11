import React from 'react';
import TodoListItem from './todoListItem';

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {

	const els = todos.map(item => {

		const { id, ...itemProps } = item;

		return (
			<li key={item.id}>
				<TodoListItem
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleDone={() => onToggleDone(id)}
				/>
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
