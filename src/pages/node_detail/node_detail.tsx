import Taro, { Current } from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import ThreadList from '../../components/thread_list';
import api from '../../utils/api';

function NodeDetail() {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // 可选链操作符?.
    const { full_name } = Current.router?.params;
    Taro.setNavigationBarTitle({
      title: decodeURI(full_name),
    });
  }, [])

  useEffect(() => {
    asyncGetData();
  }, [])

  async function asyncGetData() {
    const { short_name } = Current.router?.params;

    try {
      const {
        data: { id },
      } = await Taro.request({
        url: api.getNodeInfo({
          name: short_name,
        }),
      });
      const res = await Taro.request({
        url: api.getTopics({
          node_id: id,
        }),
      });
      setThreads(res.data);
      setLoading(false);
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误',
      });
    }
  }

  return (
    <View className="index">
      <ThreadList threads={threads} loading={loading} />
    </View>
  );
}

export default NodeDetail;
