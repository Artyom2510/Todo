import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	render() {
		return (
			<div className="row">
				<button type="button">All</button>
				<button type="button">Active</button>
				<button type="button">Done</button>
			</div>
		);
	};
}
