<template>
    <div class="main">
        <LeftSide/>
        <div class="main-right">
            <UserInfo/>
            <div class="main-right__bottom">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftSide from '../components/LeftSide.vue'
    import UserInfo from '../components/UserInfo.vue'
    export default {
        nam:"Home",
        components:{
            LeftSide,
            UserInfo
        }
    }
</script>

<style>
    .main{
        display: flex;
        height: 100%;
    }
    .main-right{
        flex-grow: 1;
    }
    .main-right__bottom{
        padding: 50px;
    }

    @media screen and (max-width:1050px) {

    }
</style>