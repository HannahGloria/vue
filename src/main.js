import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import HelloWorld from './components/HelloWorld.vue';
import ContactComponent from './components/ContactComponent';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes =[
  {path: '/hola', component: HelloWorld},
  {path: '/contacto', component: ContactComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
