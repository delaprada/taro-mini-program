import React from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { timeagoInst } from '../utils';
import { IMember } from '../interfaces/member';
import { INode } from '../interfaces/node';

import './thread.css';

interface IProps {
  title: string;
  member: IMember;
  node: INode;
  last_modified: number;
  tid: number;
  replies: number;
  key?: number;
  not_navi?: boolean; // 不导航到 detail
  setThread: (args: any) => void;
}

function Thread(props: IProps) {
  const handleNavigate = () => {
    // 这里必须显式指名 this.props 包含 tid
    // 或设置 defaultProps
    const { not_navi } = props;
    const { setThread } = props;
    if (not_navi) {
      return;
    }

    // eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props);
    setThread(props);

    Taro.navigateTo({
      url: '/pages/thread_detail/thread_detail',
    });
  };

  const { title, member, last_modified, replies, node, not_navi } = props;

  const time = timeagoInst.format(last_modified * 1000, 'zh');
  const usernameCls = `author ${not_navi ? 'bold' : ''}`;

  return (
    <View className="thread" onClick={handleNavigate}>
      <View className="info">
        <View>
          <Image src={member.avatar_large} className="avatar" />
        </View>
        <View className="middle">
          <View className={usernameCls}>{member.username}</View>
          <View className="replies">
            <Text className="mr10">{time}</Text>
            <Text>评论 {replies}</Text>
          </View>
        </View>
        <View className="node">
          <Text className="tag">{node.title}</Text>
        </View>
      </View>
      <Text className="title">{title}</Text>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setThread: (thread) =>
      dispatch({
        type: 'SET_CURRENT_THREAD',
        thread,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Thread);
