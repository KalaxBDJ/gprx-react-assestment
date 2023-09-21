import React from "react";

const TaskItem = ({ task, completeTask }) => {
    // Implement reverse text algorithm here when task is completed
    var reversedText = task.text.split('').reverse().join('');

    return (
        <li onClick={() => {
                task.text = reversedText;
                completeTask(task);
            }}
            className={task.completed ? 'completed' : ''}>
            {task.text}
        </li>
    );
};

export default TaskItem;
