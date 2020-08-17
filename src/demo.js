/* eslint-disable */
import { ComponentWrapper } from './components/common/component_wrapper';

ComponentWrapper({
    relation: {
    },
    props: {
      type: {
        type: null,
        value: ''
      }
    },
    methods: {
      onClick () {
        console.log('获取列表数据')
      }
    },
    name: 'demo'
  })