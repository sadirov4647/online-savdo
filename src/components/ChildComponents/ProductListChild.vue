<template>
    <tr>
        <td scope="row"><p>{{ productList.id }}</p></td>
        <td scope="row"><p>{{ productList.listName }}</p></td>
        <td scope="row"><p>{{ productList.listPart }}</p></td>
        <td scope="row"><p>{{ productList.listCost }}сўм</p></td>
        <td scope="row"><p>{{ productList.listSize }}</p></td>
        <td scope="row"><p>{{ productList.listAbout }}</p></td>
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
    @media screen and (max-width:700px) {
        td{
            padding: 2px;
        }
    }

</style>