import Vue from 'vue'
import App from './App'
import "static/font/iconfont.css"
import "static/fontfamily/fontfamily.css"

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
