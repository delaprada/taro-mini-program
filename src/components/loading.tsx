import React from 'react';
import { View, Image } from '@tarojs/components';
import './loading.css';
const url = require('../resource/spiner.gif');

function Loading() {
  return (
    <View className="loading">
      <Image src={url} className="img" />
    </View>
  );
}

export default Loading;
