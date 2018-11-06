import Vue from 'vue'
import Router from 'vue-router'




//路由懒加载
const Login = resolve=>{
  require.ensure(['pages/Login.vue'],()=>{
    resolve(require('pages/Login.vue'));
  })
}
const  Home = resolve=>{
  require.ensure(['pages/Home.vue'],()=>{
    resolve(require('pages/Home.vue'));
  })
}
const  Register = resolve=>{
  require.ensure(['pages/Register.vue'],()=>{
    resolve(require('pages/Register.vue'));
  })
}
const  Error = resolve=>{
  require.ensure(['pages/404.vue'],()=>{
    resolve(require('pages/404.vue'));
  })
}
Vue.use(Router)
export default new Router({
  //去除#号
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/*',
      component:Error
    }
  ]
})
