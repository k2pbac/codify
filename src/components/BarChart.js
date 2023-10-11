import "charts.css";
import { useSelector } from "react-redux";
import TabGroup from "./TabGroup";
import { filterListByMonth } from "../helpers/filter";
const BarChart = () => {
  const { list } = useSelector((state) => state.todoItems);
  const { mode } = useSelector((state) => state.style);
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
  const barChartValues = filterListByMonth(list);
  const length = barChartValues.length;
  return (
    <div className={`bar-chart ${mode}`}>
      <TabGroup />
      <table className="charts-css column show-heading show-labels show-x-axes">
        <caption> Completed Tasks </caption>
        <tbody>
          {barChartValues &&
            barChartValues.map((el, i) => {
              let temp = 0.1 * (el / length);
              return (
                <tr key={Math.random() * 100}>
                  <th scope="row">{months[i]} </th>
                  <td style={{ "--start": 0, "--end": temp }}>
                    {/* <span className="data">{i + 1}</span> */}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BarChart;
