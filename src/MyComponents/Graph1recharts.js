import React from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList, CartesianGrid, ResponsiveContainer } from "recharts";

//whenever we add any new fiels we add amt prop as 100
const data = [
	{
		name: "ShareHolder A",
		uv: 77,
		pv: 900,
		amt: 25
	},
	{
		name: "ShareHolder B",
		uv: 48,
		pv: 650,
		amt: 50
	},
	{
		name: "ShareHolder C",
		uv: 28,
		pv: 760,
		amt: 75
	},
	{
		name: "ShareHolder D",
		uv: 45,
		pv: 1350,
		amt: 100
	}
];


 const renderCustomizedLabel = (props) => {
	const { x, y, width, height, value } = props;

	const fireOffset = value.toString().length < 5;
	const offset = fireOffset ? -40 : 5;
	return (
		<text x={x + width - offset} y={y + height - 5} fill={fireOffset ? "#285A64" : "#fff"} textAnchor="end">
			{value}
		</text>
	);
};



export default function Graph1recharts() {
	return (
		<ResponsiveContainer width="80%" height={300}>
		<BarChart layout="vertical"  data={data} margin={{ top:10, left: 35}}>
			<CartesianGrid horizontal={false}/>
			<XAxis type="number" orientation="top" dataKey="amt" />
			<YAxis dataKey="name" type="category" scale="band" />
			{/* <Tooltip /> */}
      		{/* <Legend /> */}
			{/* <Bar dataKey="pv" fill="#8884d8" /> */}
			<Bar dataKey="uv" fill="linear-gradient(to right, #2896e9, #7467f0 100%);" shape={{backgroundImage: "linear-gradient(to right, #2896e9, #7467f0 100%)"}} >
				<LabelList dataKey="pv" content={renderCustomizedLabel} position="insideRight"/>
			</Bar>
		</BarChart>
		</ResponsiveContainer>
	);
}