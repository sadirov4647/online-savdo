<template>
    <tr>
        <td scope="row">{{ message.id }}</td>
        <td scope="row">{{ message.name }}</td>
        <td scope="row">{{ message.tel }}</td>
        <td scope="row">{{ message.telSecond }}</td>
        <td scope="row">{{ message.address }}</td>
        <td scope="row">{{ message.message }}</td>
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
    @media screen and (max-width:1050px) {
        td{
            text-align: center;
            padding: 5px 10px;
        }
    }
    @media screen and (max-width:700px) {
        td{
            padding: 2px;
        }
    }
</style>