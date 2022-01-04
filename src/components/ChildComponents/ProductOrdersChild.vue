<template>
    <tr>
        <td scope="row">{{ order.id }}</td>
        <td scope="row">{{ order.name }}</td>
        <td scope="row">{{ order.time }}</td>
        <td scope="row">{{ order.number }}</td>
        <td scope="row">{{ order.sum }}</td>
        <td scope="row"><img :src="order.image" alt="order image" width="19" height="19"></td>
        <td scope="row">{{ order.address }} шахар</td>
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
    @media screen and (max-width:700px) {
        td{
            padding: 2px;
        }
    }
</style>