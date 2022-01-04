<template>
    <div class="modal-mijoz" v-if="isModal">
        <div class="modal-header">
            <h2>Мижозлар қўшиш</h2>
            <button class="modal-back" @click="add">x</button>
        </div>
        <div class="modal-body">
            <div class="modal-body__features">
                <button class="modal-add__btn"><img :src="addImage" alt="add image" width="13" height="13"></button>
                <button class="modal-edit__btn"><img :src="editImage" alt="edit image" width="13" height="13"></button>
                <button class="modal-delete__btn"><img :src="deleteImage" alt="delete image" width="13" height="13"></button>
                <select name="teacher" id="teacher">
                    <option value="">Устани танланг</option>
                    <option value="">Устани танланг</option>
                    <option value="">Устани танланг</option>
                </select>
                <select name="branch" id="branch">
                    <option value="">Филиал номи</option>
                    <option value="">Филиал номи</option>
                    <option value="">Филиал номи</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Мижоз номи</th>
                        <th>Вақти</th>
                        <th>Расм</th>
                        <th>Манзили</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductOrdersModal :order="order" v-for="(order, id) in orders" :key="id"/>
                </tbody>
            </table>
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
                    <th scope="col">Мижоз номи</th>
                    <th scope="col">Вақти</th>
                    <th scope="col">Жами сони</th>
                    <th scope="col">Жами суммаси</th>
                    <th scope="col">Расм</th>
                    <th scope="col">Манзили</th>
                </tr>
            </thead>
            <tbody>
                <ProductOrdersChild :order="order" v-for="(order, id) in orders" :key="id"/>
            </tbody>
        </table>
    </div>
</template>

<script>
    import deleteImage from '../assets/inComponentAssets/delete.png'
    import editImage from '../assets/inComponentAssets/edit.png'
    import addImage from '../assets/inComponentAssets/add.png'
    import image from '../assets/inComponentAssets/product.png'
    import ProductOrdersChild from '../components/ChildComponents/ProductOrdersChild.vue'
    import ProductOrdersModal from '../components/ChildComponents/ProductOrdersModal.vue'
    export default {
        name:"ProductOrders",
        components:{
            ProductOrdersChild,
            ProductOrdersModal
        },
        data(){
            return{
                isModal:false,
                noItem:false,
                deleteImage:deleteImage,
                editImage:editImage,
                addImage:addImage,
                modalOrders:{
                    name:'',
                    time:'',
                    number:'',
                    sum:'',
                    image:'',
                    address:''
                },
                orders:[
                {
                    id:1,
                    name:'Асрақулов Илъхомжон',
                    time:'11:03  16/06/2021',
                    number:'1',
                    sum:'125 000',
                    image:image,
                    address:'Фарғона'
                },
                {
                    id:2,
                    name:'Асрақулов Илъхомжон',
                    time:'11:03  16/06/2021',
                    number:'1',
                    sum:'125 000',
                    image:image,
                    address:'Фарғона'
                },
                {
                    id:3,
                    name:'Асрақулов Илъхомжон',
                    time:'11:03  16/06/2021',
                    number:'1',
                    sum:'125 000',
                    image:image,
                    address:'Фарғона'
                },
                {
                    id:4,
                    name:'Асрақулов Илъхомжон',
                    time:'11:03  16/06/2021',
                    number:'1',
                    sum:'125 000',
                    image:image,
                    address:'Фарғона'
                },
                {
                    id:5,
                    name:'Асрақулов Илъхомжон',
                    time:'11:03  16/06/2021',
                    number:'1',
                    sum:'125 000',
                    image:image,
                    address:'Фарғона'
                },
                ]
            }
        },
        methods:{
            remove(){
                this.orders.shift()
            },
            add(){
                this.isModal = !this.isModal
            }
        }
    }
</script>

<style scoped>
    .modal-mijoz{
        display: flex;
        position: fixed;
        left: 10%;
        top: 10%;
        flex-direction: column;
        max-width: 1126px;
        width: 100%;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
        padding: 13px 26px;
        background-color: #F2F2F2;
    }
    table{
        text-align: center;
    }
    .modal-header h2{
        margin: 0;
    }
    .modal-body{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 50px 48px;
        background-color: #fff;
    }
    .modal-body__features{
        display: flex;
        margin-bottom: 30px;
    }
    .modal-body button{
        padding: 8px 13px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        margin-right: 16px;
    }
    .modal-body button:hover{
        opacity: 0.8;
    }
    .modal-add__btn{
        background-color: #2C3E50;
    }
    .modal-edit__btn{
        background-color: #FFD748;
    }
    .modal-delete__btn{
        background-color: #FF4E4E;
    }
    .modal-body select{
        padding: 8px 16px;
        background-color: #F2F2F2;
        border: none;
        border-radius: 5px;
        outline: none;
    }
    .modal-body select:not(:last-child){
        margin-right: 16px;
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