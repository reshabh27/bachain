import React from 'react'
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';


const data = [
	{ name: 'Party A', uv: 8, pv: 2400, amt: 2400 },
	{ name: 'Party B', uv: 6, pv: 2400, amt: 2400 },
	{ name: 'Party C', uv: 4, pv: 2400, amt: 2400 }
];

const colors=["#f36f4e", "#2896e9","#ae4afa"];

export const Graph2 = () => {
	return (
		<div>
			<ResponsiveContainer width="100%" height={300} >
				<BarChart  data={data} >
					<Line type="monotone" dataKey="uv" />
					<Bar dataKey="uv" barSize={30} >
					{
						data.map((entry, index) => (
							<Cell key={`cell-${index}`} stroke={colors[index]}  />
						))
					}
					</Bar>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="name" />
					<YAxis orientation="right" axisLine={false} tickLine={false} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}




// this graph is created using recharts