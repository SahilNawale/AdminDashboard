import { Stack } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import {Bar,BarChart,CartesianGrid,Legend,XAxis,YAxis,Pie,PieChart,Sector,Cell,ResponsiveContainer} from "recharts";
import ReactDatamaps from "react-india-states-map";
import { useState } from "react";


const stateCount = {
  "Maharashtra":10,
  "Rajasthan":12
}


const data01 = [
  { name: "Married", value: 400 },
  { name: "Single", value: 300 },
  { name: "Divorced", value: 300 },
  { name: "Widowed", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={10}
    >
      {`${(percent * 100).toFixed(0)}% - ${data01[index]["name"]}`}
    </text>
  );
};

const data = [
  {
    name: "20-22",
    Male: 5,
    Female: 6,
  },
  {
    name: "22-24",
    Male: 3,
    Female: 4,
  },
  {
    name: "24-26",
    Male: 4,
    Female: 3,
  },
  {
    name: "26-28",
    Male: 1,
    Female: 2,
  },
  {
    name: "28-30",
    Male: 1,
    Female: 1,
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
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
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  }
};

export const Homepage = () => {

  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India"
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    setactiveState({ data, name });
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{ marginTop: "100px" }}
        flexWrap="wrap"
      >
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            padding: "30px 30px 10px 10px",
            width: "400px",
          }}
        >
          <BarChart width={400} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Male" fill="#8884d8" />
            <Bar dataKey="Female" fill="#82ca9d" />
          </BarChart>
        </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            padding: "30px 30px 10px 10px",
            width: "400px",
          }}
        >
          <BarChart width={400} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Female" fill="#8884d8" />
            <Bar dataKey="Male" fill="#82ca9d" />
          </BarChart>
        </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            padding: "30px 30px 30px 30px",
            width: "400px",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          dignissimos nemo, rerum voluptatum dolorum fugiat animi recusandae
          laudantium voluptas tenetur repellat quibusdam officiis ullam harum
          vel temporibus iste nisi deleniti! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Asperiores dignissimos nemo, rerum
          voluptatum dolorum fugiat animi recusandae laudantium voluptas tenetur
          repellat quibusdam officiis ullam harum vel temporibus iste nisi
          deleniti!
        </Card>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{ marginTop: "100px" }}
        flexWrap="wrap"
      >
        <Card sx={{background: "#282e38",color: "white",padding: "30px 30px 30px 30px",width: "400px",height:"400px",position:"relative"}}>
          <ReactDatamaps
          style={{position:"relative"}}
            mapLayout={{
              hoverTitle: "Count",
              noDataColor: "#D36418",
              borderColor: "#ffffff"
            }}
            hoverComponent={({ value }) => {
              return (
                <>
                  <p>{value.name}-{stateCount[value.name]}</p>
                </>
              );
            }}
            onClick={stateOnClick}
            activeState={activeState}
          />
        </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            padding: "30px 30px 30px 30px",
            width: "400px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Pie
                data={data01}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            padding: "30px 30px 30px 30px",
            width: "400px",
          }}
        ></Card>
      </Stack>
    </>
  );
};
