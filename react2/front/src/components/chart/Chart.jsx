import React from "react";
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={data} >
                    <XAxis dataKey="name" stroke="white" />
                    <Line type="monotone" dataKey={dataKey} />
                    <Tooltip />
                    { grid && <CartesianGrid stroke="white" strokeDasharray="5 5" /> }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}