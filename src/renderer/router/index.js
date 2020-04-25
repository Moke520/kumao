import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import main from '../views/main.vue'
import page1 from '../views/page1.vue'
import page2 from '../views/page2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', 
      component: Home,
      redirect: 'main',
      children: [
        {
          path: 'main',
          name: 'main',
          component: main
        },
        {
          path: 'page1',
          name: 'page1',
          component: page1
        },
        {
          path: 'page2',
          name: 'page2',
          component: page2
        }
      ]
    }
  ]
})
