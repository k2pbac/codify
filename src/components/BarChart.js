import "charts.css";
import { useSelector } from "react-redux";
import TabGroup from "./TabGroup";
import { filterListByMonth, filterListByYear } from "../helpers/filter";
const BarChart = () => {
  const { list } = useSelector((state) => state.todoItems);
  const { mode } = useSelector((state) => state.style);
  const { period } = useSelector((state) => state.chart);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const barChartValues =
    period === "monthly" ? filterListByMonth(list) : filterListByYear(list);
  const length =
    period === "monthly"
      ? barChartValues.length
      : Object.keys(barChartValues).length;
  return (
    <div className={`bar-chart ${mode}`}>
      <TabGroup />
      <table className="charts-css column show-heading show-labels show-x-axes data-spacing-1">
        <caption> Completed Tasks </caption>
        <tbody>
          {period === "monthly" && barChartValues ? (
            barChartValues.map((el, i) => {
              let temp = 0.1 * (el / length);
              return (
                <tr key={Math.random() * 100}>
                  <th scope="row">{months[i]} </th>
                  <td style={{ "--start": 0, "--end": temp }}></td>
                </tr>
              );
            })
          ) : period === "yearly" ? (
            Object.keys(barChartValues).map((el, i) => {
              let temp = 0.1 * (barChartValues[el] / length);
              return (
                <tr key={Math.random() * 100}>
                  <th scope="row">{el} </th>
                  <td style={{ "--start": 0, "--end": temp }}></td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BarChart;
