import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import ThreadList from '../../components/thread_list';
import api from '../../utils/api';

function Hot() {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);

  async function asyncGetData() {
    try {
      const res = await Taro.request({
        url: api.getHotNodes(),
      });

      setThreads(res.data);
      setLoading(false);
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误',
      });
    }
  }

  useEffect(() => {
    asyncGetData();
  }, []);

  return (
    <View className="index">
      <ThreadList threads={threads} loading={loading} />
    </View>
  );
}

export default Hot;
