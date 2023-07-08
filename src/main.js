import Vue from 'vue'
import App from './App.vue'
// axios
import axios from 'axios'
Vue.prototype.axios = axios;

// Vue.use(axios)


new Vue({
    render: h => h(App)
}).$mount('#app')
