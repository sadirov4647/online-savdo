<template>
    <div class="modal-mijoz" v-if="isModal">
        <div class="modal-header">
            <h2>Мижозлар қўшиш</h2>
            <button class="modal-back" @click="add">x</button>
        </div>
        <div class="modal-body">
            <p class="no-item" v-if="noItem">Iltimos barcha inputlarni to'diring!</p>
            <div class="add-name">
                <label for="name">Маҳсулот номи</label>
                <input type="text" id="name" v-model="modalList.name" required>
            </div>
            <div class="add-part">
                <label for="product-part">Вилоят</label>
                <select name="product-part" id="product-part" v-model="modalList.part" required>
                    <option value="аёллар">Аёллар бўлими</option>
                    <option value="еркаклар">Еркаклар бўлими</option>
                    <option value="болалар">Болалар бўлими</option>
                </select>
            </div>
            <div class="add-cost">
                <label for="cost">Нарҳи</label>
                <input type="text" id="cost" v-model="modalList.cost" maxlength="9" required>
            </div>
            <div class="add-size">
                <label for="size">Ўлчам</label>
                <input type="text" id="size" v-model="modalList.size" required>
            </div>
            <div class="add-about">
                <label for="product-about">Маҳсулот ҳақида</label>
                <textarea name="product-about" id="product-about" cols="30" rows="10" maxlength="30" v-model="modalList.about"></textarea>
            </div>
            <div class="add-product__image">
                <label for="productImage">Add your product image</label>
                <input type="file" accept=".jpg,.jpeg,.png" id="productImage" required>
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
            <button class="buttons change" @click="change">Ўзгартириш</button>
            <button class="buttons minus" @click="remove">Ўчириш</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Маҳсулот номи</th>
                    <th scope="col">Маҳсулот бўлими</th>
                    <th scope="col">Нарҳи</th>
                    <th scope="col">Ўлчам</th>
                    <th scope="col">Маҳсулот ҳақида</th>
                </tr>
            </thead>
            <tbody>
                <ProductListChild :productList="productList" v-for="(productList, id) in productLists" :key="id"/>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ProductListChild from '../components/ChildComponents/ProductListChild.vue'
    export default {
        name:"ProductList",
        components:{
            ProductListChild
        },
        data(){
            return{
                noItem:false,
                isModal:false,
                modalList:{
                    name:'',
                    part:'',
                    size:'',
                    cost:'',
                    about:''
                },
                productLists:[
                    {
                        id:1,
                        listName:'Стулда ўтирган аёл',
                        listPart:'Аёллар бўлими',
                        listCost:'125 000',
                        listSize:'1300 х 830 х 620 х 860мм',
                        listAbout:'Lorem ipsum lorem...'
                    },
                    {
                        id:2,
                        listName:'Стулда ўтирган аёл',
                        listPart:'Аёллар бўлими',
                        listCost:'125 000',
                        listSize:'1300 х 830 х 620 х 860мм',
                        listAbout:'Lorem ipsum lorem...'
                    },
                    {
                        id:3,
                        listName:'Стулда ўтирган аёл',
                        listPart:'Аёллар бўлими',
                        listCost:'125 000',
                        listSize:'1300 х 830 х 620 х 860мм',
                        listAbout:'Lorem ipsum lorem...'
                    },
                    {
                        id:4,
                        listName:'Стулда ўтирган аёл',
                        listPart:'Аёллар бўлими',
                        listCost:'125 000',
                        listSize:'1300 х 830 х 620 х 860мм',
                        listAbout:'Lorem ipsum lorem...'
                    },
                    {
                        id:5,
                        listName:'Стулда ўтирган аёл',
                        listPart:'Аёллар бўлими',
                        listCost:'125 000',
                        listSize:'1300 х 830 х 620 х 860мм',
                        listAbout:'Lorem ipsum lorem...'
                    },
                ]
            }
        },
        methods:{
            modalAdd(){
                if(this.modalList.name === '' && this.modalList.size === '' && this.modalList.cost === '' && this.modalList.about === '' && this.modalList.part === ''){
                    this.noItem = !this.noItem
                }else{
                    this.productLists.push({
                        id:Math.round(Math.random() * 10),
                        listName:this.modalList.name,
                        listPart:this.modalList.part,
                        listCost:this.modalList.cost,
                        listSize:this.modalList.size,
                        listAbout:this.modalList.about
                    })
                    this.noItem = false
                }
            },
            add(){
                this.isModal = !this.isModal
            },
            remove(){
                this.productLists.shift()
            }
        }
    }
</script>

<style scoped>
    .no-item{
        position: absolute;
        justify-self: center;
    }
    .modal-mijoz{
        display: flex;
        position: fixed;
        bottom: 0;
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
    .add-product__image{
        width: 100%;
        display: flex;
        background: #F2F2F2;
        border: dashed;
        justify-content: center;
        padding: 30px;
        border-radius: 10px;
    }
    .add-product__image label{
        align-self: center;
    }
    .add-product__image input{
        display: none;
    }
    .modal-body{
        position: relative;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        padding: 50px 48px;
        background-color: #fff;
    }
    .add-name{
        margin-right: 16px;
        margin-bottom: 12px;
    }
    .add-part{
        margin-right: 16px;
    }
    select{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: #F2F2F2;
    }
    input{
        background-color: #F2F2F2;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 10px;
        width: 100%;
    }
    textarea{
        outline: none;
        border: none;
        background-color: #F2F2F2;
        padding: 10px;
        border-radius: 10px;
    }
    .modal-header h2{
        margin: 0;
    }
    .modal-back{
        background-color: #FF4B4B;
        text-align: center;
        border: none;
        padding: 6px 10px;
        cursor: pointer;
        color: #fff;
    }
    .modal-footer{
        background-color: #fff;
        display: flex;
        justify-content: center;
        padding-bottom: 34px;
    }
    .modal-footer button{
        border: none;
        padding: 13px 48px;
        border-radius: 2px;
        cursor: pointer;
    }
    .modal-footer button:hover{
        opacity: 0.8;
    }
    .modal-footer__back{
        background-color: #F2F2F2;
        margin-right: 32px;
        color: #2C3E50;
    }
    .modal-footer__save{
        background-color: #2C3E50;
        color: #fff;
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