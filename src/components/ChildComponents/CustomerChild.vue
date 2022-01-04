<template>
    <tr>
        <td scope="row">{{ mijoz.id }}</td>
        <td scope="row">{{ mijoz.name }}</td>
        <td scope="row">{{ mijoz.telefon }}</td>
        <td scope="row">{{ mijoz.viloyat }}</td>
        <td scope="row">{{ mijoz.manzil }}</td>
    </tr>
</template>

<script>
    export default {
        name:"CustomerChild",
        props:["mijoz"]
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
            padding: 5px 10px;
        }
    }
    @media screen and (max-width:700px) {
        td{
            padding: 2px;
        }
    }
</style>