<template>
    <tr>
        <td>{{ order.id }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.time }}</td>
        <td><img :src="order.image" alt="order image" width="19" height="19"></td>
        <td>{{ order.address }} шахар</td>
    </tr>
</template>

<script>
    export default {
        name:'ProductOrdersModal',
        props:["order"]
    }
</script>

<style  scoped>

</style>