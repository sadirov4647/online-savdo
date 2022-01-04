<template>
    <tr>
        <td scope="row">{{ productPart.id }}</td>
        <td scope="row">{{ productPart.partName}}</td>
        <td scope="row"><img :src="productPart.image" alt="productPart images" width="19" height="19"></td>
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