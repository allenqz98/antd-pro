import React from 'react';
import { connect } from 'dva';
import { Form, Input, Select } from 'antd';

const { Option } = Select;
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class AddTaskForm extends React.Component {
  state = {};

  handleSubmitAddTask = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmitAddTask}>
        <Form.Item label="Site">
          {getFieldDecorator('site', {
            initialValue: 'Slam Jam Socialism',
            rules: [
              {
                required: true,
                message: 'Please input a site!',
              },
            ],
          })(
            <Select>
              <Option value="sjs">Slam Jam Socialism</Option>
              <Option value="shopify" disabled>
                Shopify
              </Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="Task ID (Temp)">
          {getFieldDecorator('id', {
            rules: [
              {
                required: true,
                message: 'Please input an ID!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedAddTaskForm = Form.create({ name: 'AddTask' })(AddTaskForm);
export default WrappedAddTaskForm;
