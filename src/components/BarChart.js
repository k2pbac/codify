import "charts.css";
import { useSelector } from "react-redux";
import TabGroup from "./TabGroup";
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

  return (
    <div className={`bar-chart ${mode}`}>
      <TabGroup />
      <table className="charts-css column show-heading show-labels show-x-axes">
        <caption> Completed Tasks </caption>
        <tbody>
          {list &&
            list.map((el, i) => {
              let temp = 0.1 * (i + 1);
              temp = temp > 1 ? temp - 0.5 : temp;
              return (
                <tr key={el.key}>
                  <th scope="row">{months[i]} </th>
                  <td style={{ "--start": temp, "--end": temp }}>
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
