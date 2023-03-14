import { VictoryPie } from "victory";

export default function DoughnutChart(props) {
  let nutriments = props.nutriments;
  const data = [
    { x: "sugars", y: nutriments.sugars },
    { x: "fibers", y: nutriments.fiber },
    { x: "carbo", y: nutriments.carbohydrates },
    { x: "fat", y: nutriments.fat },
    { x: "protein", y: nutriments.proteins },
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
