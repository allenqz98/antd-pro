import React from 'react';
import { connect } from 'dva';
import { List, Button } from 'antd';
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
  state = {};

  drawListitem = item => (
    <List.Item actions={[<Button>edit</Button>, <Button>delete</Button>]}>
      <List.Item.Meta title={item.name} description="Kudo" />
      <div>Content</div>
    </List.Item>
  );

  handleAddTask = () => {
    const { addTask } = this.props;
    addTask({ name: 'new task' });
  };

  render() {
    const { tasks } = this.props;
    return (
      <PageHeaderWrapper>
        <Button onClick={this.handleAddTask}>Add a new task</Button>
        <List itemLayout="horizontal" dataSource={tasks} renderItem={this.drawListitem}></List>
      </PageHeaderWrapper>
    );
  }
}

export default Dashboard;
