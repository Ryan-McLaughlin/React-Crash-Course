import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {// props props.tasks or destructure{}; <> is an empty fragment
    return (
        <> {/** A JSX comment */}
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
