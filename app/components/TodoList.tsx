import { ITask } from "@/types/tasks";

interface TodoListProps {
  tasks: ITask[];
}

export const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="bg-base-200">
              <th>1</th>
              <td>{task.text}</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
