import { FaTimes } from 'react-icons/fa' // imports the x icon from font awesome

const Task = ({ task, onDelete, onToggle }) => {
            //
    return (
        <div
        className={'task ' + (task.reminder ? 'reminder':'')}
            onClick={() => onToggle(task.id, task.reminder)}>
            <h3 className='reminder'>
                {task.text} {''}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
