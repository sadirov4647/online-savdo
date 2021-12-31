<template>
    <div class="register">
        <div class="register__titles">
            <h1 class="register-title">Онлайн Савдо</h1>
            <p class="register-para">Рўйхатдан ўтиш</p>
        </div>
        <form class="register__form" @submit.prevent="send">
            <div class="input user-name">
                <label for="name"></label>
                <input type="text" id="name" placeholder="Исм Фамилия" v-model="name" required>
            </div>
            <div class="input user-tel">
                <label for="tel">+998</label>
                <input type="tel" id="tel" placeholder="( 9 0 ) _ _ _ _ _ _ _" maxlength="9" v-model="tel" required>
            </div>
            <div class="input user-select">
                <select name="regions" id="regions" v-model="region" required>
                    <option value="farg'ona" >Farg'ona</option>
                    <option value="andijon">Andijon</option>
                    <option value="namangan">Namangan</option>
                    <option value="buxoro">Buxoro</option>
                    <option value="toshkent">Toshkent</option>
                    <option value="xorazm">Xorazm</option>
                    <option value="samarqand">Samarqand</option>
                    <option value="xiva">Xiva</option>
                </select>
            </div>
            <div class="input user-address">
                <label for="address"></label>
                <input type="text" id="address" placeholder="Манзил" v-model="address" required>
            </div>
            <div class="input user-password">
                <label for="password"></label>
                <input type="password" id="password" placeholder="Парол" v-model="password" required>
            </div>
            <p v-if="success">Ro'yxatdan muvaffaqqiyatli o'tdingiz</p>
            <button type="submit" class="register-btn">РЎЙХАТДАН ЎТИШ</button>
            <p class="asking">Сиз алла қачон рўйхатдан ўтганмисиз ? <router-link to="/sign-up">Тизимга кириш</router-link></p>
        </form>
    </div>
</template>

<script>
    export default {
        name:"Register",
        data(){
            return{
                name:'',
                tel:'',
                region:'',
                address:'',
                password:'',
                users:[],
                success:false
            }
        },
        methods:{
            send(){
                let user = {
                    name:this.name,
                    tel:this.tel,
                    password:this.password
                }
                this.users.push(user)
                localStorage.setItem('users', JSON.stringify(this.users))
                this.name = '',
                this.tel = '',
                this.address = '',
                this.password = '',
                this.success = true
            }
        }
    }
</script>

<style scoped>
    .register{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 15px;
    }
    .register__titles{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
    }
    .register-title{
        margin: 0;
        margin-bottom: 8px;
    }
    .register-para{
        margin: 0;
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
    .register__form{
        display: flex;
        flex-direction: column;
        max-width: 355px;
        width: 100%;
    }
    /* .user-select{
        width: 100%;
    } */
    select{
        padding: 18px;
        outline: none;
        width: 100%;
        border: none;
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
    }
</style>