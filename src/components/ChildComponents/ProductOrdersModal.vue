<template>
    <tr>
        <td scope="row">{{ order.id }}</td>
        <td scope="row">{{ order.name }}</td>
        <td scope="row">{{ order.time }}</td>
        <td scope="row"><img :src="order.image" alt="order image" width="19" height="19"></td>
        <td scope="row">{{ order.address }} шахар</td>
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