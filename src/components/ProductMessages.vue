<template>
    <div>
        <div class="messages-features">
            <button class="list-upload">Рўйхатни юклаш</button>
            <input type="checkbox" name="checkbox" id="checkbox">
            <input class="meesage-input" type="text" name="message" id="message" placeholder="SMS ҳабар ёзиш">
            <button class="message-send">Ҳабарни юбориш</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Мижоз номи</th>
                    <th>Телефон рақам</th>
                    <th>Телефон рақам 2</th>
                    <th>Манзил</th>
                    <th>Ҳабарнома</th>
                </tr>
            </thead>
            <tbody>
                <ProductMessagesChild :message="message" v-for="(message, id) in messages" :key="id"/>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ProductMessagesChild from '../components/ChildComponents/ProductMessagesChild.vue'
    export default {
        name:"ProductMessages",
        components:{
            ProductMessagesChild
        },
        data(){
            return{
                messages:[
                    {
                        id:1,
                        name:'Асрақулов Илъхомжон',
                        tel:'+998934521188',
                        telSecond:'+998934521188',
                        address:'Фарғона',
                        message:'Izzatillo'
                    },
                    {
                        id:2,
                        name:'Асрақулов Илъхомжон',
                        tel:'+998934521188',
                        telSecond:'+998934521188',
                        address:'Фарғона',
                        message:'Izzatillo'
                    },
                    {
                        id:3,
                        name:'Асрақулов Илъхомжон',
                        tel:'+998934521188',
                        telSecond:'+998934521188',
                        address:'Фарғона',
                        message:'Izzatillo'
                    },
                    {
                        id:4,
                        name:'Асрақулов Илъхомжон',
                        tel:'+998934521188',
                        telSecond:'+998934521188',
                        address:'Фарғона',
                        message:'Izzatillo'
                    },
                    {
                        id:5,
                        name:'Асрақулов Илъхомжон',
                        tel:'+998934521188',
                        telSecond:'+998934521188',
                        address:'Фарғона',
                        message:'Izzatillo'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .messages-features{
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }
    .meesage-input{
        padding: 16px 26px;
        border: none;
        border-radius: 5px;
        outline: none;
        background-color: #EAEAEA;
        flex-grow: 1;
        margin-right: 32px;
    }
    .messages-features button{
        padding: 14px 17px;
        background-color: #2C3E50;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .messages-features button::before{
        content: "";
        width: 18px;
        height: 15px;
        margin-right: 14px;
    }
    .list-upload::before{
        background: url('../assets/inComponentAssets/plusok.png');
    }
    .message-send::before{
        background: url('../assets/inComponentAssets/sms.png');
    }
    .messages-features button:hover{
        opacity: 0.8;
    }
    #checkbox{
        margin-right: 16px;
        margin-left: 16px;
    }
    table{
        width: 100%;
    }
    table, th, td{
        border: 1px solid #BDBDBD;
        border-collapse: collapse;
    }
    table thead tr{
        text-align: left;
    }
    table thead tr th{
        padding: 20px 30px;
        background-color: #2C3E50;
        color: #fff;
    }

    @media screen and (max-width:1050px) {
        .messages-features{
            margin-bottom: 15px;
        }
    }
</style>