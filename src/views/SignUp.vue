<template>
    <div class="sign-up">
        <div class="sign-in__titles">
            <h1>Онлайн Савдо</h1>
            <p>Давом этиш учун тизимга киринг!</p>
        </div>
        <form class="admit-form" @submit.prevent="isUser">
            <div class="input user-tel">
                <label for="tel">+998</label>
                <input type="tel" id="tel" placeholder="( 9 0 ) _ _ _ _ _ _ _" v-model="tel">
            </div>
            <div class="input user-password">
                <label for="password"></label>
                <input type="password" id="password" placeholder="Парол" v-model="password">
            </div>
            <p v-if="error">Parolda yoki telda xatolik aniqlandi!!!</p>
            <button type="submit" class="register-btn">КИРИШ</button>
            <p class="asking">Рўйхатдан ўтмаганмисиз?<router-link to="/register">Рўйхатдан ўтиш</router-link></p>
        </form>
    </div>
</template>

<script>
    export default {
        name:'SignUp',
        data(){
            return{
                tel:'',
                name:'',
                password:'',
                error:false,
                success:[]
            }
        },
        methods:{
            isUser(){
                let credential = {
                    tel:this.tel,
                    password:this.password
                }
               let getUser =  localStorage.users;
               getUser = JSON.parse(getUser)

                getUser.forEach(item => {
                   if(item.tel === credential.tel && item.password === credential.password) {
                   this.success.push(item)
                   let success =  localStorage.setItem("succes", JSON.stringify(this.success))
                    console.log(success)
                      this.$router.push('/')
                    }else{
                        this.error = true
                    }
                })

                this.tel = '',
                this.password = ''
            }
        }
    }
</script>

<style scoped>
    .sign-in__titles{
        margin-bottom: 44px;
    }

    .sign-in__titles h1,
    .sign-in__titles p{
        margin: 0;
    }
    .sign-in__titles h1{
        margin-bottom: 8px;
    }
    .sign-up{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 353px;
        margin: 0 auto;
        height: 100vh;
        width: 100%;
    }
    .input{
        margin-bottom: 12px;
    }
    input{
        border: none;
        border-radius: 5px;
        background-color: #fff;
        padding: 18px;
        outline: none;
        width: 100%;
    }
    .user-tel{
        padding: 18px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
    }
    .user-tel::before{
        content: "";
        background: url(../assets/phone.png);
        width: 15px;
        height: 16px;
        margin-right: 8px;
    }
    .user-tel input{
        padding: 0;
        margin-left: 5px;
        background: inherit;
    }
    .user-password{
        background-color: #fff;
        display: flex;
        align-items: baseline;
        padding: 18px;
    }
    .user-password input{
        background-color: inherit;
        padding: 0;
    }
    .user-password::before{
        content: "";
        background: url(../assets/lock.png);
        width: 17px;
        height: 18px;
        display: flex;
        margin-right: 8px;
    }
    .register-btn{
        width: 100%;
        padding: 16px 0;
        background: linear-gradient(92.13deg, #2C3E50 0.69%, #405A74 116.89%);
        border-radius: 5px;
        color: #fff;
        border: none;
        cursor: pointer;
        margin-top: 50px;
    }
    .register-btn:hover{
        opacity: 0.8;
    }
    .asking{
        font-size: 14px;
        line-height: 18px;
        margin: 0;
        margin-top: 8px;
    }
</style>