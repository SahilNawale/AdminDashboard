import { Stack } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Sector,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import ReactDatamaps from "react-india-states-map";
import { useState } from "react";

const stateCount = {
  Maharashtra: 10,
  Rajasthan: 12,
};

const areaChartData = [
  {
    name: '18',
    uv: 4000,
  },
  {
    name: '20',
    uv: 3000,
  },
  {
    name: '22',
    uv: 2000,
  },
  {
    name: '24',
    uv: 2780,
  },
  {
    name: '26',
    uv: 1890,
  },
  {
    name: '28',
    uv: 2390,
  },
  {
    name: '30',
    uv: 3490,
  }
]

const data01 = [
  { name: "Married", value: 400 },
  { name: "Single", value: 300 },
  { name: "Divorced", value: 300 },
  { name: "Widowed", value: 200 },
];

const data02 = [
  { name: "General", value: 4 },
  { name: "OBC", value: 6 },
  { name: "SC", value: 4 },
  { name: "ST", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel1 = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 3 + 10;
  const x = 10;
  const y = index * 20 + 10;

  return (
    <text
      style={{ fontWeight: "bold", color: "black", fontSize: "15px" }}
      x={x}
      y={y}
      fill={COLORS[index]}
      dominantBaseline="central"
      fontSize={10}
    >
      {`${(percent * 100).toFixed(0)}% - ${data01[index]["name"]}`}
    </text>
  );
};
const renderCustomizedLabel2 = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 3 + 10;
  const x = 10;
  const y = index * 20 + 10;

  return (
    <text
      style={{ fontWeight: "bold", color: "black", fontSize: "15px" }}
      x={x}
      y={y}
      fill={COLORS[index]}
      dominantBaseline="central"
      fontSize={10}
    >
      {`${(percent * 100).toFixed(0)}% - ${data02[index]["name"]}`}
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

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

export const Homepage = () => {
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {};

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ marginTop: "100px" }}
        flexWrap="wrap"
      >
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            width: "450px",
            height: "300px",
            margin: "10px 0px",
          }}
        >
          <BarChart
            width={400}
            height={250}
            data={data}
            style={{ marginTop: "30px" }}
          >
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
            width: "450px",
            height: "300px",
            margin: "10px 0px",
          }}
        >
          <AreaChart
            width={450}
            height={250}
            data={areaChartData}
            margin={{
              top: 40,
              right: 30,
              left: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
            <Typography sx={{marginLeft:"50px",color:"gray"}}>Y-axis : Income , X-axis : Age</Typography>
          </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            padding: "20px",
            width: "410px",
            height: "260px",
            margin: "10px 0px",
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
          <h3>Total Users : 10</h3>
        </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            width: "450px",
            height: "300px",
            position: "relative",
            margin: "10px 0px",
          }}
          className="map-background"
        >
          <ReactDatamaps
            mapLayout={{
              hoverTitle: "Count",
              noDataColor: "#D36418",
              borderColor: "#ffffff",
            }}
            hoverComponent={({ value }) => {
              return (
                <>
                  <p>
                    {value.name}-{stateCount[value.name]}
                  </p>
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
            width: "430px",
            height: "260px",
            padding: "20px 10px",
            margin: "10px 0px",
          }}
        >
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <PieChart width={430} height={260}>
            <Pie
              data={data01}
              cx="60%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel1}
              outerRadius={120}
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
          {/* </ResponsiveContainer> */}
        </Card>
        <Card
          sx={{
            background: "#282e38",
            color: "white",
            width: "430px",
            height: "260px",
            padding: "20px 10px",
            margin: "10px 0px",
          }}
        >
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <PieChart width={430} height={260}>
            <Pie
              data={data02}
              cx="60%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel2}
              outerRadius={120}
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
          {/* </ResponsiveContainer> */}
        </Card>
      </Stack>
    </>
  );
};
