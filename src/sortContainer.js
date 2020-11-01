import React from "react";
import giftIdeas from "./data";
import GiftsCard from "./gifts";
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
			<ReactSortable
				id="giftCardContainer"
				list={this.state.gifts}
				setList={(newState) => this.setState({ gifts: newState })}
			>
				{this.state.gifts.map((item, i) => (
					<GiftsCard
						className="gifts"
						key={item.id}
						id={item.name + i}
						gifts={this.state.gifts}
						index={i}
					></GiftsCard>
				))}
			</ReactSortable>
		);
	}
}
