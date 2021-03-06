import Vue from 'vue'
import Router from 'vue-router'
// import {storage} from '../assets/js/utils/storage'
import routeConfig from './route.config.json';
var registerRoute = (routeConfig) => {
  let route = [];
  routeConfig.map(pages => {
    route.push({
      path: pages.path,
      name: pages.name !== undefined ? pages.name : null,
      redirect: pages.redirect !== undefined ? pages.redirect : null,
      component: require(`@/pages${pages.component}`).default,
      meta: pages.meta !== undefined ? pages.meta : null,
      children: pages.children !== undefined ? registerRoute(pages.children) : null
    })
  });

  return route;
};

var route = registerRoute(routeConfig);

Vue.use(Router)

const routeInstance = new Router({
  routes: route
})

routeInstance.beforeEach((to, from, next) => {
  // if (to.name !== 'login') {
  //   let token = storage.cookie.get('token');
  //   if (token !== null) {
  //     next()
  //   } else {
  //     routeInstance.replace({name: 'login'})
  //   }
  // }
  next()
})

export default routeInstance

