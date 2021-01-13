import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, RichText, Image } from '@tarojs/components';
import Thread from '../../components/thread';
import { Loading } from '../../components/loading';
import { IThread } from '../../interfaces/thread';
import api from '../../utils/api';
import { timeagoInst, GlobalState, IThreadProps } from '../../utils';

import './index.css';

interface IState {
  loading: boolean,
  replies: IThread[],
  content: string,
  thread: IThreadProps,
}

function prettyHTML(str) {
  const lines = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  lines.forEach(line => {
    const regex = new RegExp(`<${line}`, 'gi');

    str = str.replace(regex, `<${line} class="line"`);
  })

  return str.replace(/<img/gi, '<img class="img"');
}

class ThreadDetail extends Component<IState, {}> {
  state = {
    loading: true,
    replies: [],
    content: '',
    thread: {} as IThreadProps
  } as IState;

  async componentDidMount() {
    this.setState({
      thread: this.props.thread
    })
    try {
      const id = this.props.thread.tid
      const [{ data }, { data: [{ content_rendered }] }] = await Promise.all([
        Taro.request<IThread[]>({
          url: api.getReplies({
            'topic_id': id
          })
        }),
        Taro.request<IThread[]>({
          url: api.getTopics({
            id
          })
        })
      ])
      this.setState({
        loading: false,
        replies: data,
        content: prettyHTML(content_rendered)
      })
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误"
      })
    }
  }

  render() {
    const { loading, replies, thread, content } = this.state;

    // 在加载到thread的数据后再渲染，防止出现property of undefined的报错
    const attrLen = Object.keys(thread).length;

    const replieEl = replies.map((reply, index) => {
      const time = timeagoInst.format(reply.last_modified * 1000, 'zh');

      return (
        <View className="reply" key={reply.id}>
          <Image src={reply.member.avatar_large} className="avatar" />
          <View className="main">
            <View className="author">
              {reply.member.username}
            </View>
            <View>
              {time}
            </View>
            {Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
              ? <View className="content">{reply.content}</View>
              : <View dangerouslySetInnerHTML={{ __html: reply.content }} className='content'></View>
            }
            <View className="floor">
              {index + 1}楼
            </View>
          </View>
        </View>
      )
    })

    const contentEl = loading
      ? <Loading />
      : (
        <View>
          <View className="main-content">
            {Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
              ? <View>{content}</View>
              : <RichText nodes={content} />
            }
          </View>
          <View className="replies">
            {replieEl}
          </View>
        </View>
      )

    return (
      <View className="detail">
        {attrLen ? <Thread
          node={thread.node}
          title={thread.title}
          last_modified={thread.last_modified}
          replies={thread.replies}
          tid={thread.id}
          member={thread.member}
          not_navi={true}
        /> : null}
        {contentEl}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  thread: state.thread
})

export default connect(mapStateToProps, null)(ThreadDetail);