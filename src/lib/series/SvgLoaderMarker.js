"use strict";
import React from "react";
import PropTypes from "prop-types";
import { hexToRGBA, functor } from "../utils";

function SvgLoader(props) {
	const {
		className, stroke, strokeWidth,
		opacity, fill, point, width
	} = props;
	const w = functor(width)(point.datum);
	const x = point.x - (w / 2);
	const y = point.y - (w / 2);
	return (
		<rect
			className={className}
			x={x}
			y={y}
			stroke={stroke}
			strokeWidth={strokeWidth}
			fillOpacity={opacity}
			fill={fill}
			width={w}
			height={w}
		/>
	);
}
SvgLoader.propTypes = {
	stroke: PropTypes.string,
	fill: PropTypes.string.isRequired,
	opacity: PropTypes.number.isRequired,
	point: PropTypes.shape({
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		datum: PropTypes.object.isRequired,
	}).isRequired,
	className: PropTypes.string,
	strokeWidth: PropTypes.number,
	path: PropTypes.string,
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.func
	]).isRequired
};
SvgLoader.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-svg",
	path: ''
};
SvgLoader.drawOnCanvas = (props, point, ctx) => {
	const { stroke, fill, opacity, strokeWidth } = props;
	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;
	if (fill !== "none") {
		ctx.fillStyle = hexToRGBA(fill, opacity);
	}
	SvgLoader.drawOnCanvasWithNoStateChange(props, point, ctx);
};
SvgLoader.drawOnCanvasWithNoStateChange = (props, point, ctx) => {
	const { width } = props;
	const w = functor(width)(point.datum);
	const x = point.x - (w / 2);
	const y = point.y - (w / 2);

	var p = new Path2D(props.path);
	ctx.transform(1,0,0,1,x,y);
	ctx.fill(p);
	ctx.restore();
};
export default SvgLoader;
