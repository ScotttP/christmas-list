import React from "react";
import giftIdeas from "./data";
import Gifts from "./gifts";
import { ReactSortable } from "react-sortablejs";

export default class SortContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gifts: giftIdeas,
		};
	}
	render() {
		return (
			<div>
				<ReactSortable
					list={this.state.gifts}
					setList={(newState) => this.setState({ gifts: newState })}
				>
					{this.state.gifts.map((item, i) => (
						<Gifts
							className="gifts"
							key={item.id}
							id={item.name + i}
							gifts={this.state.gifts}
							index={i}
						></Gifts>
					))}
				</ReactSortable>
			</div>
		);
	}
}
