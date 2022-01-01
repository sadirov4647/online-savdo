<template>
    <tr>
        <td><p>{{ productList.id }}</p></td>
        <td><p>{{ productList.listName }}</p></td>
        <td><p>{{ productList.listPart }}</p></td>
        <td><p>{{ productList.listCost }}сўм</p></td>
        <td><p>{{ productList.listSize }}</p></td>
        <td><p>{{ productList.listAbout }}</p></td>
    </tr>
</template>

<script>
    export default {
        name:'ProductListChild',
        props:["productList"]
    }
</script>

<style scoped>
p{
    margin: 0;
    text-align: center;
    font-weight: 500;
font-size: 14px;
line-height: 17px;
}

    td{
        border: 1px solid #BDBDBD;
        border-collapse: collapse;
    }
</style>