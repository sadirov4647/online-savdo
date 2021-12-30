<template>
    <div class="product-list">
        <div class="button-features">
            <button class="plus">Қўшиш</button>
            <button class="change">Ўзгартириш</button>
            <button class="minus">Ўчириш</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ProductList"
    }
</script>

<style scoped>
    .product-list{
        display: flex;
        flex-direction: column;
    }
    button{
        padding: 14px 20px;
        border-radius: 5px;
        border: none;
    }
</style>