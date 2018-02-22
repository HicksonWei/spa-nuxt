<template>
  <div class="app">
    <Menu/>
    <div class="cover"></div>
    <div class="content">
      <nuxt-child/>
      <h2 v-if="status">Please choose the upper items</h2>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Menu from '../components/Menu';
  import Footer from '../components/Footer';

  export default {
    data(){
      return {
        status: false,
      };
    },
    mounted(){
        const alert = this.$route.name;
        console.log(alert);
        if(alert == 'foul' || alert == 'index'){
          this.status = true;
        }
    },
    components: {
      Menu,
      Footer,
    },
  };
</script>

<style>
html, body, .app{
  padding: 0;
  margin: 0;
  font-family: Arial;
  color: #123;
}
</style>

<style scoped>
.cover{
  width: 100%;
  height: 270px;
  background: url('/view.jpg') center center;
  background-size: cover;
}
.content{
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  min-height: calc(100vh - 422px);
}

@media(max-width: 450px){
  .content{
    padding: 0 40px;
  }
}
</style>
