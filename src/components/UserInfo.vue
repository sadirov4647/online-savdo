<template>
    <div class="user-info">
            <div class="user-info__input">
                <label for="product-search"></label>
                <input type="text" id="product-search" placeholder="Қидирув">
            </div>

        <div class="user-right">
            <div class="about-user">
                <div class="user-titles">
                    <h2>{{ successUser.name }}</h2>
                    <p>+998{{ successUser.tel }}</p>
                </div>
                <img src="../assets/inComponentAssets/user.png" alt="user image" width="52" height="52">
            </div>
            <div class="user-features">
                <button><img src="../assets/inComponentAssets/bell.png" alt="bell image" width="20" height="20"></button>
                <router-link class="log-out__btn" :to="{name: 'Register'}"><img src="../assets/inComponentAssets/logout.png" alt="log out image" width="16" height="20"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'UserInfo',
        data(){
            return{
                successUser:'',
            }
        },
        methods:{
            notShow(){
                this.success = !this.success
            }
        },
        created(){
            let successUser = JSON.parse(localStorage.getItem("succes"))
            if(successUser){
                this.success = true
                this.successUser = successUser[0]
                console.log(successUser)
            }
            else{
                this.$router.redirect('/register')
            }
        },
    }
</script>

<style scoped>
    .nav-btn{
        display: none;
    }
    .user-info{
        display: flex;
        justify-content: space-between;
        padding: 26px 40px;
        background-color: #fff;
    }
    .user-info__input{
        display: flex;
        max-width: 370px;
        width: 100%;
        align-items: center;
        padding-left: 17px;
        background: #F3F3F3;
    }
    .user-info__input::before{
        content: "";
        background: url('../assets/search.svg');
        width: 20px;
        height: 20px;
        margin-right: 11px;
        padding-left: 17px;
    }
    .user-info__input input{
        border: none;
        background: inherit;
        padding: 15px;
        border-radius: 5px;
        outline: none;
    }
    .user-right{
        display: flex;
    }
    .about-user{
        display: flex;
        align-items: center;
        margin-right: 45px;
    }
    .user-titles{
        display: flex;
        flex-direction: column;
        margin-right: 13px;
    }
    .user-titles h2, p{
        margin: 0;
    }
    .user-titles p{
        color: #BDBDBD;
        font-size: 12px;
        line-height: 14px;
    }
    .user-titles h2{
        margin-bottom: 5px;
        color: #000000;
        font-size: 14px;
        line-height: 16px;
    }
    .user-features{
        display: flex;
        align-items: center;
    }
    .user-features::before{
        content: "";
        width: 1px;
        height: 64px;
        background-color:  #EFF4F7;
        margin-right: 40px;
    }
    .user-features button{
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    .log-out__btn{
        margin-left: 30px;
    }

    @media screen and (max-width:1050px) {
        .user-info{
            padding: 13px 20px;
        }
        .user-features::before{
            margin-right: 10px;
        }
        .user-info__input{
            width: auto;
        }
        .about-user{
            margin-right: 10px;
        }
    }
    @media screen and (max-width:600px) {
        .user-info{
            display: block;
        }
        .user-right{
            justify-content: space-around;
        }
        .user-info__input{
            display: block;
            max-width: 270px;
        }
        .nav-btn{
            display: block;
            border: none;
            background-color: aquamarine;
            border-radius: 5px;
            padding: 10px 15px;
        }
    }
</style>