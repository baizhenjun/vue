<template>
  <div class="hello">
      <div><button @click="test">122222222</button></div>
  </div>
</template>

<script>
import { test } from '@/plugins/index'
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
          // queryUrl: test(),
      }
  },
  methods :{
      test() {
          // test({})
          // axios.post('audit/user/test', {
          //     params: {//有参数时,若无参数时直接省略不写
          //         id: 1
          //     }
          // }).then((res) => {
          //     console.log('数据：', res);
          // })
          test({})
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
