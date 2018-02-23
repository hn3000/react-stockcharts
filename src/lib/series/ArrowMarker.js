"use strict";
import React from "react";
import PropTypes from "prop-types";
import { hexToRGBA, functor } from "../utils";

function Arrow(props) {
	const {
		className, stroke, strokeWidth,
		opacity, fill, point,
		width, height, dir
	} = props;

	const w = functor(width)(point.datum);
	const h = functor(height)(point.datum);
	const d = functor(dir)(point.datum);
	const { x, y } = point;
	const { offset, flow, base, stem, flare } = getArrowMeasures(w, h, d);
	const points = 0 != stem ? `
		${x},${y + offset}
		${x + base},${y + offset}
		${x + base},${y + offset + stem}
		${x + flare},${y + offset + stem}
		${x},${y + offset + flow * h}
		${x - flare},${y + offset + stem}
		${x - base},${y + offset + stem}
		${x - base},${y + offset}
		` : `
		${x},${y + offset}
		${x + flare},${y + offset}
		${x},${y + offset + flow * h}
		${x - flare},${y + offset}
		`;

	return (
		<polygon
			className={className}
			points={points}
			stroke={stroke}
			strokeWidth={strokeWidth}
			fillOpacity={opacity}
			fill={fill}
		/>
	);
}
Arrow.propTypes = {
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
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.func
	]).isRequired,
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.func
	]).isRequired,
	dir: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]).isRequired
};
Arrow.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-arrow",
};
Arrow.drawOnCanvas = (props, point, ctx) => {
	const { stroke, fill, opacity, strokeWidth } = props;
	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;
	if (fill !== "none") {
		ctx.fillStyle = hexToRGBA(fill, opacity);
	}
	Arrow.drawOnCanvasWithNoStateChange(props, point, ctx);
};
Arrow.drawOnCanvasWithNoStateChange = (props, point, ctx) => {
	const { width, height, dir } = props;
	const w = functor(width)(point.datum);
	const h = functor(height)(point.datum);
	const d = functor(dir)(point.datum);
	const { x, y } = point;
	const { offset, flow, base, stem, flare } = getArrowMeasures(w, h, d);
	ctx.beginPath();

	ctx.moveTo(x, y + offset);
	if (0 !== stem) {
		ctx.lineTo(x + base, y + offset);
		ctx.lineTo(x + base, y + offset + stem);
	}
	ctx.lineTo(x + flare, y + offset + stem);
	ctx.lineTo(x, y + offset + h * flow);
	ctx.lineTo(x - flare, y + offset + stem);
	if (0 !== stem) {
		ctx.lineTo(x - base, y + offset + stem);
		ctx.lineTo(x - base, y + offset);
	}
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};
export default Arrow;

function getArrowMeasures(w, h, d) {
	const up = d === "up" || d === "upto";
	const to = d === "downto" || d === "upto";

	const flow = up ? -1 : 1;
	const offset = (to ? h : 0) * -flow;

	const base = w / 6;
	const stemlength = Math.max(0, (h - w));
	const stem = stemlength * flow;
	const flare = w / 2;

	return {
		offset, flow,
		base, stem, flare
	};
}
