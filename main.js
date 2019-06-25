import Vue from 'vue'
import App from './App'
import Obj from './extends/request'
import "static/font/iconfont.css"
import "static/fontfamily/fontfamily.css"
Vue.prototype.$req = Obj.req
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
