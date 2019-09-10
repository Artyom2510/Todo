import React from 'react';

const TodoListItem = ({label, important = false}) => {

	const style = {
		color: important ? 'orange' : 'black'
	};

	return <span style={style}>{label}</span>;
};

export default TodoListItem;
