import { Stack } from "@mui/material"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import {ComposableMap,Geographies,Geography,Marker } from "react-simple-maps";
  

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]


const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

export const Homepage = () => {
    
    return (
        <>
        <Stack direction='row' spacing={2} justifyContent='space-around' sx={{marginTop:"100px"}} flexWrap='wrap'>
            <Card sx={{ background: "#282e38", color: "white",padding:"30px 30px 10px 10px",width:"400px"}}>
                <BarChart width={400} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </Card>
            <Card sx={{ background: "#282e38", color: "white",padding:"30px 30px 10px 10px",width:"400px"}}>
                <BarChart width={400} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </Card>
            <Card sx={{ background: "#282e38", color: "white",padding:"30px 30px 30px 30px" ,width:"400px"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dignissimos nemo, rerum voluptatum dolorum fugiat animi recusandae laudantium voluptas tenetur repellat quibusdam officiis ullam harum vel temporibus iste nisi deleniti!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dignissimos nemo, rerum voluptatum dolorum fugiat animi recusandae laudantium voluptas tenetur repellat quibusdam officiis ullam harum vel temporibus iste nisi deleniti!
            </Card>
        </Stack>
        <Stack direction='row' spacing={2} justifyContent='space-around' sx={{marginTop:"100px"}} flexWrap='wrap'>
            <Card sx={{ background: "#282e38", color: "white",padding:"30px 30px 30px 30px" ,width:"400px"}}>
            <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{rotate: [58, 20, 0],scale: 500
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
            </Card>
            <Card sx={{ background: "#282e38", color: "white",padding:"30px 30px 30px 30px" ,width:"400px"}}>

            </Card>
            <Card sx={{ background: "#282e38", color: "white",padding:"30px 30px 30px 30px" ,width:"400px"}}>

            </Card>
        </Stack>
        </>
    )
}