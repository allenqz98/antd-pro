import React from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class BotSetting extends React.Component {
  state = {};

  render() {
    return <PageHeaderWrapper></PageHeaderWrapper>;
  }
}

export default BotSetting;
