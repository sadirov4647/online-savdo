<template>
  <div class="main">
      <LeftSide/>
    <div class="right-side">
      <UserInfo :successUser="successUser" @clicked="notShow"/>
      <div class="right-bottom">
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
      UserInfo,
    },
    data(){
      return{
        success:false,
        successUser:''
      }
    },
    methods:{
      notShow(){
        this.success = !this.success
      }
    },
    created(){
      let successUser = JSON.parse(localStorage.getItem("succes"))
      console.log(successUser)
      if(successUser){
        this.success = true
        this.successUser = successUser[0]
        console.log(successUser)
      }
      else{
        this.$router.push('/register')
      }
    }
  }

</script>

<style scoped>
  .right-bottom{
    padding: 40px;
  }
  .main{
    display: flex;
    height: 100vh;
  }
  .right-side{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .right-bottom{
    flex-grow: 1;
  }
</style>