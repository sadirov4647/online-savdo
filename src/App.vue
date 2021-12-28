<template>
<div class="main">
  <div v-if="success">
    <LeftSide/>
  </div>
  <div class="right-side">
    <UserInfo/>
  <div class="right">
   <router-view />
  </div>
  </div>
</div>
</template>
<script>
import LeftSide from './components/LeftSide.vue'
import UserInfo from './components/UserInfo.vue'
  export default {
  name:'App',
  components: {
    LeftSide,
    UserInfo
  },
    data(){
      return{
        success:false
      }
    },
    created(){
    let successUser = localStorage.succes
      if(successUser){
      this.success = true
     console.log(successUser)
    }else{
      this.$router.push('/register')
    }
    }
  }

</script>

<style scoped>
  .main{
    display: flex;
  }
  .right-side{
    flex-grow: 1;
  }
</style>