import React from "react";

export default function Gifts(props) {
	return (
		<div>
			<h4>{props.gifts[props.index].name}</h4>
			<h4>{props.gifts[props.index].price}</h4>
			<h4>{props.gifts[props.index].notes}</h4>
			<a href={props.gifts[props.index].link} target="_blank" rel="noreferrer">
				Link to Product
			</a>
		</div>
	);
}
