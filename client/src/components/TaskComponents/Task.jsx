import React from 'react';
import classnames from 'classnames';

import './Task.sass';
import Button from '../Button/Button';

const Task = ({ task, editButton, deleteButton, onTaskEdit, onTaskDelete }) => {
  const taskClass = classnames('task', { 'task--finished': task.isFinished });

  return (
    <div className={taskClass}>
      <p className="task__title">{task.title}</p>
      <p className="task__description">{task.description}</p>
      <div className="task__bottom">
        <p className="task__status">
          {task.isFinished ? 'Finished' : 'In process'}
        </p>
        <div className="task__actions">
          <Button button={editButton} clickHandler={() => onTaskEdit(task)} />
          <Button
            button={deleteButton}
            clickHandler={() => onTaskDelete(task._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
