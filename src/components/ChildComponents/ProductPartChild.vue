<template>
    <tr>
        <td>{{ productPart.id }}</td>
        <td>{{ productPart.partName}}</td>
        <td><img :src="productPart.image" alt="productPart images" width="19" height="19"></td>
    </tr>
</template>

<script>
    export default {
        name:'ProductPartChild',
        props:["productPart"]
    }
</script>

<style scoped>
    td{
        padding: 8px 30px;
        border: 1px solid #BDBDBD;
        border-collapse: collapse;
    }
</style>