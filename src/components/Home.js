import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import { BsArrowRightShort } from "react-icons/bs";

const Home = () => {
  const { mode } = useSelector((state) => state.style);
  const { list, filter, date } = useSelector((state) => state.todoItems);
  const tasks = list.filter((el) => date === el.deadline);
  const completedTasks = tasks.filter((el) => el.clicked);
  const currentTask = tasks[0];

  const calculateTotalCompleted = () => {
    if (tasks.length == 0) return 100;
    const total = (completedTasks.length / tasks.length) * 100;
    console.log(
      tasks.length,
      completedTasks.length,
      completedTasks.length / tasks.length,
      (completedTasks.length / tasks.length) * 100
    );
    // document
    //   .getElementsByClassName("progressbar-percent")[0]
    //   .setAttribute("content", total + "%");
    return total.toFixed(0);
  };
  return (
    <div className="Home">
      <div className="daily-container">
        <div className={`current-task ${mode}`}>
          {currentTask ? (
            <p>
              <span>Current task:</span> {currentTask.name}
            </p>
          ) : (
            <></>
          )}
          <a href="/tasks">
            Go to tasks <BsArrowRightShort />
          </a>
        </div>
        <div className={`progress-container ${mode}`}>
          <p>Today's Progress</p>
          <div
            className="progressbar-percent"
            role="progressbar"
            aria-valuenow={calculateTotalCompleted()}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": calculateTotalCompleted() }}
          >
            {calculateTotalCompleted()}%
          </div>
          <ul className="legend">
            <li>
              Complete <span className="complete"></span>
            </li>
            <li>
              In progress <span className="in-progress"></span>
            </li>
          </ul>
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default Home;
