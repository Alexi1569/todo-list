import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import Task from '../../components/TaskComponents/Task';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import { handleInputChange } from '../../helpers';
import {
  createTaskAction,
  deleteTaskAction,
  editTaskAction
} from '../../actions/taskActions';
import './Tasks.sass';

class Tasks extends React.Component {
  state = {
    showCreateTaskModal: false,
    showEditTaskModal: false,
    createTaskForm: {
      name: 'createTaskForm',
      caption: 'Create task',
      inputs: {
        title: {
          settings: {
            type: 'text',
            id: 'create-title',
            placeholder: 'Task title',
            value: '',
            name: 'title'
          },
          el: 'input',
          label: 'Title'
        },
        description: {
          settings: {
            id: 'create-description',
            placeholder: 'Task description',
            value: '',
            name: 'description'
          },
          el: 'textarea',
          label: 'Description'
        }
      },
      button: {
        el: 'button',
        text: 'Create',
        isAccent: true,
        isFormButton: true
      }
    },
    toggleCreateTaskButton: {
      isLinkButton: true,
      el: 'button',
      text: 'Create task'
    },
    editButton: {
      isIconButton: true,
      el: 'button',
      title: 'Edit task',
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M119.2 114.3H9.8c-2.3 0-4.1 1.9-4.1 4.1s1.9 4.1 4.1 4.1h109.5c2.3 0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1zM5.7 78l-.1 19.5c0 1.1.4 2.2 1.2 3 .8.8 1.8 1.2 2.9 1.2l19.4-.1c1.1 0 2.1-.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9L79.8 8.1c-1.6-1.6-4.2-1.6-5.9 0L60.5 21.6 6.9 75.1c-.7.8-1.2 1.8-1.2 2.9zm71.2-61.1l13.5 13.5-7.6 7.6-13.5-13.5 7.6-7.6zM14 79.8l49.4-49.4 13.5 13.5-49.4 49.3-13.6.1.1-13.5z"/></svg>'
    },
    deleteButton: {
      isIconButton: true,
      isDangerButton: true,
      el: 'button',
      title: 'Delete task',
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 489.6"><path d="M456.5 75.6h-103V51.5C353.5 23.1 330.4 0 302 0H187.6c-28.4 0-51.5 23.1-51.5 51.5v24.1h-103c-9.9 0-18 8.1-18 18s8.1 18 18 18h27.4v315.2c0 34.6 28.1 62.8 62.8 62.8h243.1c34.6 0 62.8-28.1 62.8-62.8V169.2c0-9.9-8.1-18-18-18s-18 8.1-18 18v257.6c0 14.8-12 26.8-26.8 26.8H123.2c-14.8 0-26.8-12-26.8-26.8V111.6h360c10 0 18.1-8.1 18.1-18s-8.1-18-18-18zm-138.9 0H172.1V51.5c0-8.5 6.9-15.5 15.5-15.5h114.5c8.5 0 15.5 6.9 15.5 15.5v24.1z"/><path d="M244.8 151.2c-9.9 0-18 8.1-18 18V396c0 9.9 8.1 18 18 18s18-8.1 18-18V169.2c0-9.9-8.1-18-18-18zM169.2 151.2c-9.9 0-18 8.1-18 18V396c0 9.9 8.1 18 18 18s18-8.1 18-18V169.2c0-9.9-8.1-18-18-18zM320.4 151.2c-9.9 0-18 8.1-18 18V396c0 9.9 8.1 18 18 18s18-8.1 18-18V169.2c0-9.9-8.1-18-18-18z"/></svg>'
    },
    editTaskForm: {
      name: 'editTaskForm',
      caption: 'Edit task',
      inputs: {
        title: {
          settings: {
            type: 'text',
            id: 'edit-title',
            placeholder: 'Task title',
            value: '',
            name: 'title'
          },
          el: 'input',
          label: 'Title'
        },
        description: {
          settings: {
            id: 'edit-description',
            placeholder: 'Task description',
            value: '',
            name: 'description'
          },
          el: 'textarea',
          label: 'Description'
        },
        isFinished: {
          settings: {
            type: 'checkbox',
            id: 'edit-finished',
            value: '',
            name: 'isFinished'
          },
          el: 'checkbox',
          label: 'Finished'
        }
      },
      button: {
        el: 'button',
        text: 'Edit',
        isAccent: true,
        isFormButton: true
      }
    },
    taskToUpdate: null
  };

  changeInput = (e, name, type) => {
    handleInputChange(e, name, type, this);
  };

  submit = e => {
    e.preventDefault();

    const { user } = this.props;
    const { createTaskForm, editTaskForm, taskToUpdate } = this.state;
    let showModal;
    let inputs;
    let result;

    if (this.state.showCreateTaskModal) {
      inputs = createTaskForm.inputs;
    } else if (this.state.showEditTaskModal) {
      inputs = editTaskForm.inputs;
    }

    for (let input in inputs) {
      inputs[input].error = '';
    }

    const formData = new FormData(document.forms[0]);
    formData.append('creatorId', user._id);

    if (this.state.showCreateTaskModal) {
      result = this.props.createTask(formData);
    } else if (this.state.showEditTaskModal) {
      formData.append('_id', taskToUpdate._id);
      const isFinishedChecked = inputs.isFinished.settings.value;

      if (isFinishedChecked !== true) {
        formData.append('isFinished', false);
      }

      result = this.props.editTask(formData);
    }

    result
      .then(res => {
        if (res.errors) {
          for (let error in res.errors) {
            inputs[error].error = res.errors[error].message;
          }

          showModal = true;
        } else {
          for (let input in inputs) {
            inputs[input].settings.value = '';
          }

          showModal = false;
        }

        if (this.state.showCreateTaskModal) {
          this.setState({ createTaskForm, showCreateTaskModal: showModal });
        } else if (this.state.showEditTaskModal) {
          this.setState({ editTaskForm, showEditTaskModal: showModal });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  closeModal = name => {
    let formData;
    let targetForm;

    if (name === 'showCreateTaskModal') {
      formData = this.state.createTaskForm;
      targetForm = 'createTaskForm';
    } else if (name === 'showEditTaskModal') {
      formData = this.state.editTaskForm;
      targetForm = 'editTaskForm';
    }

    const { inputs } = formData;

    for (let input in inputs) {
      inputs[input].error = null;
      inputs[input].settings.value = '';
    }

    this.setState({
      [name]: false,
      [targetForm]: formData
    });
  };

  openModal = name => {
    this.setState({
      [name]: true
    });
  };

  editTaskHandler = task => {
    const { editTaskForm } = this.state;
    const { inputs } = editTaskForm;

    inputs['title'].settings.value = task.title;
    inputs['description'].settings.value = task.description;
    inputs['isFinished'].settings.value = task.isFinished;

    this.setState({
      showEditTaskModal: true,
      editTaskForm,
      taskToUpdate: task
    });
  };

  deleteTaskHandler = id => {
    this.props.deleteTask(id);
  };

  render() {
    const { user, isModalTaskLoading, isTasksLoading } = this.props;
    const {
      createTaskForm,
      editTaskForm,
      showCreateTaskModal,
      showEditTaskModal,
      toggleCreateTaskButton,
      editButton,
      deleteButton
    } = this.state;

    const tasksList = user.tasks.map(task => (
      <Task
        key={task._id}
        task={task}
        editButton={editButton}
        deleteButton={deleteButton}
        onTaskEdit={this.editTaskHandler}
        onTaskDelete={this.deleteTaskHandler}
      />
    ));

    const tasksItemsClass = classnames('tasks__items', {
      'tasks__items--not-empty': tasksList.length > 0
    });

    return (
      <section className="tasks">
        <div className="container">
          <div className="tasks__content">
            <p className="tasks__title">My Tasks</p>
            {tasksList.length === 0 && (
              <p className="tasks__empty">No tasks created</p>
            )}
            <div className="tasks__buttons">
              <Button
                clickHandler={() => this.openModal('showCreateTaskModal')}
                button={toggleCreateTaskButton}
              />
              <Modal
                isOpen={showCreateTaskModal}
                closeModal={() => this.closeModal('showCreateTaskModal')}
              >
                {isModalTaskLoading && <Spinner />}
                <Form
                  bgForm
                  submit={this.submit}
                  handleInputChange={this.changeInput}
                  form={createTaskForm}
                  isMultiPartFormData
                />
              </Modal>
            </div>
            <Modal
              isOpen={showEditTaskModal}
              closeModal={() => this.closeModal('showEditTaskModal')}
            >
              {isModalTaskLoading && <Spinner />}
              <Form
                bgForm
                submit={this.submit}
                handleInputChange={this.changeInput}
                form={editTaskForm}
                isMultiPartFormData
              />
            </Modal>
            <div className={tasksItemsClass}>
              {isTasksLoading && <Spinner />}
              {tasksList.length > 0 && tasksList}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isModalTaskLoading: state.global.isModalTaskLoading,
    isTasksLoading: state.global.isTasksLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: createTaskData => dispatch(createTaskAction(createTaskData)),
    deleteTask: id => dispatch(deleteTaskAction(id)),
    editTask: editTaskData => dispatch(editTaskAction(editTaskData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
