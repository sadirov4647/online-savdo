<template>
    <tr>
        <td>{{ message.id }}</td>
        <td>{{ message.name }}</td>
        <td>{{ message.tel }}</td>
        <td>{{ message.telSecond }}шахар</td>
        <td>{{ message.address }}</td>
        <td>{{ message.message }}</td>
    </tr>
</template>

<script>
    export default {
        name:"ProductMessagesChild",
        props:["message"]
    }
</script>

<style  scoped>
    td{
        padding: 8px 30px;
        border: 1px solid #BDBDBD;
        border-collapse: collapse;
    }
</style>