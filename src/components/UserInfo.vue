<template>
    <div class="user-info">
        <div class="user-info__input">
            <label for="product-search"></label>
            <input type="text" id="product-search" placeholder="Қидирув">
        </div>
    </div>
</template>

<script>
    export default {
        name:'UserInfo'
    }
</script>

<style scoped>
    .user-info{
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
</style>