<template>
  <div id="app">
    <HeaderComponent/>
    <Slider/>
    <div class="center">
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import Slider from './components/Slider.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    Slider,
    FooterComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
@import './assets/css/styles.css';
</style>
