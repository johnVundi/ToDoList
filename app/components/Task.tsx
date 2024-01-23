import { ITask } from "@/types/tasks";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
interface TaskProps{
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={task.id} className="bg-base-200">
      <th>1</th>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit cursor="pointer" className="text-blue-500" size={24} />
        <FaTrashAlt  cursor="pointer" className="text-red-400"  size={24}/>
        </td>
    </tr>
  );
};

export default Task
