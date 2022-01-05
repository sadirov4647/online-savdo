<template>
    <div>
    <button class="res" @click="res">X</button>
    <div class="left-side">
        <div class="left-side__title">
            <h2>Онлайн Савдо</h2>
        </div>
        <div class="left-side__routers">
            <router-link class="customers" :to="{name:'Customers'}">Мижозлар</router-link>
            <router-link class="product-part" :to="{name:'ProductPart'}">Маҳсулот бўлими</router-link>
            <router-link class="product-list" :to="{name:'ProductList'}">Маҳсулот рўйхати</router-link>
            <router-link class="orders" :to="{name:'ProductOrders'}">Буюртмалар</router-link>
            <router-link class="sms" :to="{name:'ProductMessages'}">SMS ҳабарнома</router-link>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:'LeftSide',
        methods:{
            res(){
                let resNav = document.querySelector('.left-side');
                if(resNav.classList.contains('ok')){
                    resNav.classList.remove("ok")
                }else{
                    resNav.classList.add('ok')
                }
            }
        }
    }
</script>

<style scoped>
    .res{
        display: none;
        position: fixed;
        top: 25px;
        right: 25px;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        background-color: aquamarine;
        color: #fff;
    }
    .left-side{
        max-width: 318px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .left-side__title h2{
        padding: 27px 0;
        color: #fff;
        background-color: #374E65;
        margin: 0;
        text-align: center;
    }
    .left-side__routers{
        background-color: #2C3E50;
        padding: 42px;
        height: 100%;
    }
    a{
        color: #fff;
        text-decoration: none;
        display: flex;
        margin-bottom: 32px;
    }
    a::before{
        content: "";
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }
    .orders::before{
        background: url(../assets/buyurtma.svg);
    }
    .product-list::before{
        background: url(../assets/list.svg);
    }
    .product-part::before{
        background: url(../assets/customer.svg);
        background-repeat: no-repeat;
    }
    .sms::before{
        background: url(../assets/xabarnoma.svg);
    }
    .customers::before{
        background: url(../assets/customer.svg);
        background-repeat: no-repeat;
    }

    @media screen and (max-width:1050px) {
        .left-side__routers{
            padding: 20px;
        }
    }

    @media screen and (max-width:878px) {
        a::before{
            margin-right: 10px;
        }
    }
    @media screen and (max-width:825px) {
        .left-side{
            transform: translateX(850px);
            position: fixed;
            transition: 0.3s;
            z-index: 99;
        }
    }
    @media screen and (max-width:600px) {
        .res{
            display: block;
        }
        .ok{
        transform: translateX(0);

    }
    }
</style>