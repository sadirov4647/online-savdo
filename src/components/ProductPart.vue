<template>
    <div class="modal-product__part" v-if="isModal">
        <div class="modal-header">
            <h2>Мижозлар қўшиш</h2>
            <button class="modal-back" @click="add">x</button>
        </div>
        <div class="modal-body">
            <p class="no-item" v-if="noItem">Iltimos barcha inputlarni to'diring!</p>
            <div class="add-product__image">
                <label for="productImage"></label>
                <input type="file" accept=".jpg,.jpeg,.png" id="productImage" required>
            </div>
            <div class="add-product__name">
                <label for="productName">Маҳсулот бўлими номи</label>
                <input type="text" class="product-part__input" id="productName" v-model="modalProduct.modalProductName" required>
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-footer__back" @click="add">Ортга</button>
            <button class="modal-footer__save" @click="modalAdd">Сақлаш</button>
        </div>
    </div>


    <div>
        <div class="button-features">
            <button class="buttons plus" @click="add">Қўшиш</button>
            <button class="buttons change">Ўзгартириш</button>
            <button class="buttons remove">Ўчириш</button>
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
    import ProductPartChild from './ChildComponents/ProductPartChild.vue'
    import images from '../assets/inComponentAssets/product.png'
    export default {
        name:"ProductPart",
        components:{
            ProductPartChild
        },
        data(){
            return{
                noItem:false,
                isModal:false,
                modalProduct:{
                    modalProductName:'',
                    modalProductImage:''
                },
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
        },
        methods:{
            modalAdd(){
                if(this.modalProduct.modalProductName === ''){
                    this.noItem = !this.noItem
                }else{
                    this.noItem = false
                    this.productParts.push({
                        id:Math.round(Math.random() * 10),
                        partName:this.modalProduct.modalProductName,
                        image:this.modalProduct.modalProductImage
                    })
                    this.isModal = !this.isModal
                }
            },
            add(){
                this.isModal = !this.isModal
            },
            remove(){
                this.productParts.shift()
            }
        }
    }
</script>

<style scoped>
    .no-item{
    text-align: center;
    margin: 0;
    margin-bottom: 16px;
    }
    .modal-product__part{
        display: flex;
        position: absolute;
        flex-direction: column;
        max-width: 636px;
        width: 100%;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
        padding: 13px 26px;
        background-color: #F2F2F2;
    }
    .modal-header h2{
        margin: 0;
    }
    .modal-back{
        padding: 6px 10px;
        background-color: #FF4B4B;
        color: #fff;
        border: none;
        border-radius: 3px;
    }
    .modal-body{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 50px 48px;
        background-color: #fff;
    }
    .add-product__image{
        width: 100%;
        display: flex;
        background: #F2F2F2;
        border: dashed;
        justify-content: center;
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 24px;
    }
    .modal-footer{
        display: flex;
        justify-content: center;
        background-color: #fff;
        padding-bottom: 30px;
    }
    .modal-footer__back{
        background-color: #F2F2F2;
        margin-right: 32px;
        color: #2C3E50;
        border: none;
        padding: 14px 50px;
        cursor: pointer;
    }
    .modal-footer__save{
        background-color: #2C3E50;
        color: #fff;
        border: none;
        padding: 14px 50px;
        cursor: pointer;
    }
    .add-product__name{
        display: flex;
        flex-direction: column;
    }
    .product-part__input{
        padding: 10px;
        border: none;
        outline: none;
        background-color: #F2F2F2;
        border-radius: 2px;
    }
    .button-features{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }
    .buttons{
        padding: 14px 20px;
        border-radius: 5px;
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .buttons:not(:last-child){
        margin-right: 32px;
    }
    .buttons::before{
        content: "";
        width: 16px;
        height: 16px;
        margin-right: 15px;
    }
    .plus{
        background: #2C3E50;
    }
    .remove{
        background: #FF2626;
    }
    .change{
        background: #FFD748;
    }
    .plus::before{
        background: url(../assets/inComponentAssets/plus.png);
    }
    .remove::before{
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