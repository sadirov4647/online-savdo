<template>
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
</template>

<script>
    export default {
        name:'LeftSide',
    }
</script>

<style scoped>
    .left-side{
        max-width: 318px;
        width: 100%;
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
</style>