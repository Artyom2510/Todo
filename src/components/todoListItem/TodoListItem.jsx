import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

	render() {

		const {label = false, onDelete, onToggleImportant, onToggleDone, done, important} = this.props;

		let classNames = 'label';
		if (done) {
			classNames += ' done';
		}
		if (important) {
			classNames += ' important';
		}

		return (
			<div className="row">
				<span
					className={classNames}
					onClick={onToggleDone}>
					{label}
				</span>
	
				<button type="button" className="btn-imp" onClick={onToggleImportant}>Imp!</button>
				<button type="button" className="btn-del" onClick={onDelete}>Del</button>
			</div>
		);
	};
}
