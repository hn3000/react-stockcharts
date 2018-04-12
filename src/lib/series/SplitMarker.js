"use strict";
import React from "react";
import PropTypes from "prop-types";
import { hexToRGBA, functor } from "../utils";

function Split(props) {
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
Split.propTypes = {
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
	]).isRequired
};
Split.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-rect",
};
Split.drawOnCanvas = (props, point, ctx) => {
	const { stroke, fill, opacity, strokeWidth } = props;
	ctx.strokeStyle = stroke;
	ctx.lineWidth = strokeWidth;
	if (fill !== "none") {
		ctx.fillStyle = hexToRGBA(fill, opacity);
	}
	Split.drawOnCanvasWithNoStateChange(props, point, ctx);
};
Split.drawOnCanvasWithNoStateChange = (props, point, ctx) => {
	const { width } = props;
	const w = functor(width)(point.datum);
	const x = point.x - (w / 2);
	const y = point.y - (w / 2);

	ctx.font="10px sans-serif";
	ctx.beginPath();
	ctx.moveTo(x+15,y+0);
	ctx.lineTo(x+9.75,y+0);
	ctx.lineTo(x+9.75,y+2.5006104);
	ctx.lineTo(x+8.25,y+2.5006104);
	ctx.lineTo(x+8.25,y+0);
	ctx.lineTo(x+3,y+0);
	ctx.bezierCurveTo(x+1.3499756,y+0,x+0,y+1.3499756,x+0,y+3);
	ctx.lineTo(x+0,y+8);
	ctx.bezierCurveTo(x+0,y+9.6499634,x+1.3499756,y+11,x+3,y+11);
	ctx.lineTo(x+8.25,y+11);
	ctx.lineTo(x+8.25,y+8.4993896);
	ctx.lineTo(x+9.75,y+8.4993896);
	ctx.lineTo(x+9.75,y+11);
	ctx.lineTo(x+15,y+11);
	ctx.bezierCurveTo(x+16.6500244,y+11,x+18,y+9.6499634,x+18,y+8);
	ctx.lineTo(x+18,y+3);
	ctx.bezierCurveTo(x+18,y+1.3499756,x+16.6500244,y+0,x+15,y+0);
	ctx.closePath();
	ctx.moveTo(x+5.6848145,y+8.2753906);
	ctx.bezierCurveTo(x+5.2473145,y+8.653320299999999,x+4.6721192,y+8.8417968,x+3.9592286,y+8.8417968);
	ctx.bezierCurveTo(x+3.2756347999999997,y+8.8417968,x+2.7160645,y+8.6591796,x+2.2795411,y+8.2949218);
	ctx.bezierCurveTo(x+1.8430176999999999,y+7.930663999999998,x+1.6252441,y+7.4453125,x+1.6252441,y+6.8398438);
	ctx.lineTo(x+2.8117675,y+6.8398438);
	ctx.bezierCurveTo(x+2.8117675,y+7.1523438,x+2.9172363000000003,y+7.40625,x+3.1262206000000003,y+7.601562599999999);
	ctx.bezierCurveTo(x+3.3371582,y+7.796875,x+3.6193848,y+7.8945312,x+3.973877,y+7.8945312);
	ctx.bezierCurveTo(x+4.342041099999999,y+7.8945312,x+4.631103599999999,y+7.796875,x+4.8430176,y+7.601562400000001);
	ctx.bezierCurveTo(x+5.0549316,y+7.406249800000001,x+5.160400399999999,y+7.123046800000001,x+5.160400399999999,y+6.751953);
	ctx.bezierCurveTo(x+5.160400399999999,y+6.3779296,x+5.050048799999999,y+6.0898436,x+4.828369199999999,y+5.8876952000000005);
	ctx.bezierCurveTo(x+4.606689599999999,y+5.685546800000001,x+4.2785645,y+5.5849609,x+3.842041,y+5.5849609);
	ctx.lineTo(x+3.1437988,y+5.5849609);
	ctx.lineTo(x+3.1437988,y+4.6474609);
	ctx.lineTo(x+3.8664549999999998,y+4.6474609);
	ctx.bezierCurveTo(x+4.2307128,y+4.644531199999999,x+4.5197753,y+4.549804699999999,x+4.7336425,y+4.3642578);
	ctx.bezierCurveTo(x+4.9465331,y+4.1787109,x+5.052978400000001,y+3.9101562,x+5.052978400000001,y+3.5585937);
	ctx.bezierCurveTo(x+5.052978400000001,y+3.2197264999999997,x+4.9641112000000005,y+2.9570312,x+4.786376800000001,y+2.7695312);
	ctx.bezierCurveTo(x+4.609619000000001,y+2.5830078,x+4.338134600000001,y+2.4892578,x+3.973876800000001,y+2.4892578);
	ctx.bezierCurveTo(x+3.654540900000001,y+2.4892578,x+3.392822100000001,y+2.5810546999999997,x+3.1877440000000012,y+2.765625);
	ctx.bezierCurveTo(x+2.982666,y+2.9492188,x+2.880127,y+3.1894531,x+2.880127,y+3.4853516);
	ctx.lineTo(x+1.6936035,y+3.4853516);
	ctx.bezierCurveTo(x+1.6936035,y+3.1210938,x+1.7902832,y+2.7890625,x+1.9836426,y+2.4892578);
	ctx.bezierCurveTo(x+2.1779785,y+2.1894530999999997,x+2.4484864,y+1.9560546999999997,x+2.7941895,y+1.7890625);
	ctx.bezierCurveTo(x+3.1418457,y+1.6210938,x+3.529541,y+1.5371094,x+3.9592285,y+1.5371094);
	ctx.bezierCurveTo(x+4.6691894000000005,y+1.5371094,x+5.2258301,y+1.7148438000000001,x+5.6320801,y+2.0722656);
	ctx.bezierCurveTo(x+6.036377,y+2.4277344,x+6.239502,y+2.9238281,x+6.239502,y+3.5585938);
	ctx.bezierCurveTo(x+6.239502,y+3.8779297,x+6.1379395,y+4.1777344,x+5.9348145,y+4.4589844);
	ctx.bezierCurveTo(x+5.7307129,y+4.7412109,x+5.4680176,y+4.953125,x+5.145752,y+5.0966797);
	ctx.bezierCurveTo(x+5.536377,y+5.230468800000001,x+5.833252,y+5.4404297,x+6.036377,y+5.7265625);
	ctx.bezierCurveTo(x+6.2404785,y+6.0126953,x+6.342041,y+6.3544922,x+6.342041,y+6.7519531);
	ctx.bezierCurveTo(x+6.342041,y+7.3896484,x+6.123291,y+7.8974609,x+5.6848145,y+8.2753906);
	ctx.closePath();
	ctx.moveTo(x+9.75,y+7.0001221);
	ctx.lineTo(x+8.25,y+7.0001221);
	ctx.lineTo(x+8.25,y+3.9993896);
	ctx.lineTo(x+9.75,y+3.9993896);
	ctx.lineTo(x+9.75,y+7.0001221);
	ctx.closePath();
	ctx.moveTo(x+16.31073,y+8.6856079);
	ctx.lineTo(x+11.5304566,y+8.6856079);
	ctx.lineTo(x+11.5304566,y+7.8701782);
	ctx.lineTo(x+13.8986207,y+5.2871704);
	ctx.bezierCurveTo(x+14.2404176,y+4.906311,x+14.4835816,y+4.5879516,x+14.629089500000001,y+4.3320923);
	ctx.bezierCurveTo(x+14.7736207,y+4.0772095,x+14.845886400000001,y+3.8203735,x+14.845886400000001,y+3.5635376);
	ctx.bezierCurveTo(x+14.845886400000001,y+3.2246704,x+14.750183300000002,y+2.9512329,x+14.560730200000002,y+2.7432251);
	ctx.bezierCurveTo(x+14.369324000000002,y+2.5352173000000002,x+14.113464600000002,y+2.4307251,x+13.791199000000002,y+2.4307251);
	ctx.bezierCurveTo(x+13.407409900000003,y+2.4307251,x+13.109558400000003,y+2.5479126,x+12.897644300000003,y+2.7822876);
	ctx.bezierCurveTo(x+12.685730200000004,y+3.0166626,x+12.580261500000002,y+3.3369751,x+12.580261500000002,y+3.7442017);
	ctx.lineTo(x+11.393738100000002,y+3.7442017);
	ctx.bezierCurveTo(x+11.393738100000002,y+3.3115845,x+11.492370900000003,y+2.9219361,x+11.689636500000002,y+2.5742798000000002);
	ctx.bezierCurveTo(x+11.885925600000002,y+2.2285767,x+12.168152100000002,y+1.9590454000000004,x+12.533386500000002,y+1.7666626);
	ctx.bezierCurveTo(x+12.900574000000002,y+1.5742798,x+13.322449000000002,y+1.4785767,x+13.800964600000002,y+1.4785767);
	ctx.bezierCurveTo(x+14.491394300000001,y+1.4785767,x+15.035339600000002,y+1.6524048,x+15.433777100000002,y+1.9981079);
	ctx.bezierCurveTo(x+15.833191200000002,y+2.3457641,x+16.0324099,y+2.8242798,x+16.0324099,y+3.4365845);
	ctx.bezierCurveTo(x+16.0324099,y+3.7910767,x+15.931824,y+4.163147,x+15.732605200000002,y+4.5527954);
	ctx.bezierCurveTo(x+15.531433300000002,y+4.9414673,x+15.204284900000001,y+5.3828735,x+14.748230200000002,y+5.8779907);
	ctx.lineTo(x+13.009949000000002,y+7.738342299999999);
	ctx.lineTo(x+16.31073,y+7.738342299999999);
	ctx.lineTo(x+16.31073,y+8.6856079);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
};
export default Split;
