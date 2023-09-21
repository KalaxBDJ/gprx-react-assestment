import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, completeTask }) => {

    return (
        <ul>
            {
                tasks.map((task) => {
                    return (
                        <TaskItem key={task.id}  task={task} completeTask={completeTask}/>
                    )
                })
            }
        </ul>
    );
};

export default TaskList;
