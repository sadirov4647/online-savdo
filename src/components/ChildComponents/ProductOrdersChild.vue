<template>
    <tr>
        <td>{{ order.id }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.time }}</td>
        <td>{{ order.number }}</td>
        <td>{{ order.sum }}</td>
        <td><img :src="order.image" alt="order image" width="19" height="19"></td>
        <td>{{ order.address }} шахар</td>
    </tr>
</template>

<script>
    export default {
        name:"ProductOrdersChild",
        props:["order"]
    }
</script>

<style scoped>
    td{
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        border: 1px solid #BDBDBD;
        border-collapse: collapse;
    }
</style>