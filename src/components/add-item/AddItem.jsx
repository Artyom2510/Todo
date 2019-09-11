import React, {Component} from 'react';
import './add-item.css';

export default class ItemAdd extends Component {

	state = {
		label: ''
	}

	onChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.label);
		this.setState({
			label: ''
		});
	};

	render() {
		return(
			<form
				className="item-add"
				onSubmit={this.onSubmit}
			>
				<input
					type="text"
					className="input-text"
					onChange={this.onChange}
					placeholder="WTF"
					value={this.state.label}
				/>
				<button
					type="submit"
				>Add item</button>
			</form>
		);
	};
}
