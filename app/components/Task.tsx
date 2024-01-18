import { ITask } from "@/types/tasks";

interface TaskProps{
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={task.id} className="bg-base-200">
      <th>1</th>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task
