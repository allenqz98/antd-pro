import React from 'react';
import { connect } from 'dva';
import { List, Button, Icon, Modal, Popconfirm } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import WrappedAddTaskForm from './AddTaskForm';

const mapStateToProps = state => ({
  tasks: state.dashboard.tasks,
});

const mapDispatchToProps = {
  addTask: task => ({
    type: 'dashboard/addTask',
    payload: task || {},
  }),

  deleteTask: id => ({
    type: 'dashboard/deleteTask',
    payload: id || -1,
  }),
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Dashboard extends React.Component {
  state = {
    showAddTask: false,
  };

  drawListitem = item => (
    <List.Item
      actions={[
        <Button type="primary">
          <Icon type="right" />
        </Button>,
        <Button>
          <Icon type="pause" />
        </Button>,
        <Button>
          <Icon type="edit" />
        </Button>,
        <Popconfirm
          title="Are you sure to delete?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => this.deleteTask(item.id)}
        >
          <Button type="danger">
            <Icon type="close" />
          </Button>
        </Popconfirm>,
      ]}
      key={item.id}
    >
      <List.Item.Meta title={item.name} description="Slam Jam" />
      <div>{item.status}</div>
    </List.Item>
  );

  deleteTask = id => {
    const { deleteTask } = this.props;
    deleteTask(id);
  };

  handleCancel = () => {
    this.setState({
      showAddTask: false,
    });
  };

  handleOk = () => {
    const { addTask } = this.props;
    addTask({ name: 'new task', id: 999 });
    this.setState({
      showAddTask: false,
    });
  };

  handleAddTask = () => {
    this.setState({
      showAddTask: true,
    });
  };

  render() {
    const { tasks } = this.props;
    const { showAddTask } = this.state;
    return (
      <PageHeaderWrapper>
        <Button onClick={this.handleAddTask}>
          <Icon type="plus" /> Add
        </Button>
        <Modal
          title="Create a new Task"
          visible={showAddTask}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <WrappedAddTaskForm />
        </Modal>
        <List itemLayout="horizontal" dataSource={tasks} renderItem={this.drawListitem}></List>
      </PageHeaderWrapper>
    );
  }
}

export default Dashboard;
