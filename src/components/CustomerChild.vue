<template>
    <tr>
        <td>{{ mijoz.id }}</td>
        <td>{{ mijoz.name }}</td>
        <td>{{ mijoz.telefon }}</td>
        <td>{{ mijoz.viloyat }}</td>
        <td>{{ mijoz.manzil }}</td>
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
</style>