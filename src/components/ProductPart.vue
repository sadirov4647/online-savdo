<template>
    <div>
        <div class="button-features">
            <button class="plus">Қўшиш</button>
            <button class="change">Ўзгартириш</button>
            <button class="minus">Ўчириш</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Маҳсулот бўлими номи</th>
                    <th>Расм</th>
                </tr>
            </thead>
            <tbody>
                <ProductPartChild :productPart="productPart" v-for="(productPart, id) in productParts" :key="id"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import ProductPartChild from '../components/ProductPartChild.vue'
import images from '../assets/inComponentAssets/product.png'
    export default {
        name:"ProductPart",
        components:{
            ProductPartChild
        },
        data(){
            return{
                productParts:[
                    {
                        id:1,
                        partName:'Аёллар бўлими',
                        image:images
                    },
                    {
                        id:2,
                        partName:'Эркаклар бўлими',
                        image:images
                    },
                    {
                        id:3,
                        partName:'Болалар бўлими',
                        image:images
                    },
                    {
                        id:4,
                        partName:'Оёқ кийим бўлими',
                        image:images
                    },
                    {
                        id:5,
                        partName:'Аёллар бўлими',
                        image:images
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .button-features{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }
    button{
        padding: 14px 20px;
        border-radius: 5px;
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    button:not(:last-child){
        margin-right: 32px;
    }
    button::before{
        content: "";
        width: 16px;
        height: 16px;
        margin-right: 15px;
    }
    .plus{
        background: #2C3E50;
    }
    .minus{
        background: #FF2626;
    }
    .change{
        background: #FFD748;
    }
    .plus::before{
        background: url(../assets/inComponentAssets/plus.png);
    }
    .minus::before{
        background: url(../assets/inComponentAssets/otmen.png);
        background-repeat: no-repeat;
    }
    .change::before{
        background: url(../assets/inComponentAssets/edit.png);
    }
    table{
        width: 100%;
    }
    table, th, td{
        border: 1px solid #BDBDBD;
        border-collapse: collapse;
    }
    table thead tr{
        text-align: left;
    }
    table thead tr th{
        padding: 20px 30px;
        background-color: #2C3E50;
        color: #fff;
    }
</style>