import { VictoryPie } from "victory";

export default function DoughnutChart() {
  const data = [
    { x: "sugar", y: 12 },
    { x: "fibers", y: 7 },
    { x: "carbo", y: 50 },
    { x: "fat", y: 30 },
    { x: "protein", y: 30 },
  ];

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <VictoryPie
        data={data}
        innerRadius={80}
        padding={90}
        colorScale={["#f74bd7", "#019300", "#ebe80e", "#ae6b00", "#003aed"]}
        animate={{ duration: 2000 }}
        responsive={true}
        cornerRadius={({ datum }) => datum.y * 0.2}
      />
    </div>
  );
}
