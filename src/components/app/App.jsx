import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData : [
			this.createItem('Drink tea'),
			this.createItem('Drink protein'),
			this.createItem('Eat meat'),
		],
		term: '',
		filter: 'active'
	};

	createItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const index = todoData.findIndex((el) => el.id === id);

			const newArr = [
				...todoData.slice(0, index),
				...todoData.slice(index + 1)
			];

			return {
				todoData: newArr
			};
		});
	}

	onAddItem = (text) => {
		const newItem = this.createItem(text);

		this.setState(({todoData}) => {
			const newArr = [
				...todoData,
				newItem
			];
			return {
				todoData: newArr
			};
		});
	}

	toggleProperty(arr, id, propName) {
		const index = arr.findIndex((el) => el.id === id);

		const oldItem = arr[index];
		const newItem = {
			...oldItem,
			[propName]: !oldItem[propName]
		};

		return [
			...arr.slice(0, index),
			newItem,
			...arr.slice(index + 1)
		];
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	};

	onSearchChange = (term) => {
		this.setState({ term });
	};

	search(items, term) {
		if (term.length === 0) {
			return items;
		}

	filter(items, filter) {
		switch(filter) {
			case 'all': return items;
			case 'active': return items.filter((item) => !item.done);
			case 'done': return items.filter((item) => item.done);
		}

	return items.filter((item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};

	render() {

		const {todoData, term, filter} = this.state;
		const showItem = this.filter(
			this.search(todoData, term), filter);
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;
		return (
			<div>
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="row">
					<SearchPanel
						onSearchChange={this.onSearchChange}
					/>
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={showItem}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<AddItem onAddItem={this.onAddItem} />
			</div>
		);
	};

};
