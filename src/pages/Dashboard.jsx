import React from 'react';
import { connect } from 'dva';
import { List, Button, Icon, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const mapStateToProps = state => ({
  tasks: state.dashboard.tasks,
});

const mapDispatchToProps = {
  addTask: task => ({
    type: 'dashboard/addTask',
    payload: task || {},
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
        <Button type="danger" onClick={e => this.deleteTask(e)}>
          <Icon type="close" />
        </Button>,
      ]}
    >
      <List.Item.Meta title={item.name} description="Slam Jam" />
      <div>Idle</div>
    </List.Item>
  );

  deleteTask = e => {
    e.preventDefault();
    console.log(e);
  };

  handleCancel = () => {
    this.setState({
      showAddTask: false,
    });
  };

  handleOk = () => {
    const { addTask } = this.props;
    addTask({ name: 'new task' });
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
          <p>Something</p>
        </Modal>
        <List itemLayout="horizontal" dataSource={tasks} renderItem={this.drawListitem}></List>
      </PageHeaderWrapper>
    );
  }
}

export default Dashboard;
