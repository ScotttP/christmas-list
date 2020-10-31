import React from "react";

export default function Gifts(props) {
	return (
		<div>
			<img
				class="giftImages"
				id={"imageFor" + props.gifts[props.index].name}
				src={props.gifts[props.index].image}
				alt={props.gifts[props.index].name}
			></img>
			<h4>{props.gifts[props.index].name}</h4>
			<h4>{props.gifts[props.index].price}</h4>
			<p>{props.gifts[props.index].notes}</p>
			<a href={props.gifts[props.index].link} target="_blank" rel="noreferrer">
				Link to Gift
			</a>
		</div>
	);
}
