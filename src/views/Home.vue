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
        table thead tr th{
            padding: 5px 10px !important;
        }
        .main-right__bottom{
            padding: 35px;
        }
    }
    @media screen and (max-width:878px) {
        .main-right__bottom{
            padding: 20px;
        }
        table thead tr th{
            padding: 3px !important;
        }
    }
    @media screen and (max-width:615px) {
        .button-features{
            flex-direction: column;
            align-items: flex-start !important;
            max-width: 300px;
        }
        .buttons{
            margin-bottom: 12px;
            margin-right: 0 !important;
            width: 100%;
        }
        .modal-top{
            max-width: 400px !important;
            width: 100% !important;
        }
    }
</style>