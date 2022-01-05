<template>
    <div class=" modal-top modal-mijoz" v-if="isModal">
        <div class="modal-header">
            <h2>Мижозлар қўшиш</h2>
            <button class="modal-back" @click="add">x</button>
        </div>
        <div class="modal-body">
            <p class="no-item" v-if="noItem">Iltimos barcha inputlarni to'diring!</p>
            <div class="add-name">
                <label for="name">Исм Фамилия</label>
                <input type="text" id="name" v-model="modalUser.modalName" required>
            </div>
            <div class="add-tel">
                <label for="tel">Телефон рақам</label>
                <input type="tel" id="tel" v-model="modalUser.modalTel" maxlength="9" required>
            </div>
            <div class="add-region">
                <label for="regions">Вилоят</label>
                <select name="regions" id="regions" v-model="modalUser.modalRegion" required>
                    <option value="farg'ona">Farg'ona</option>
                    <option value="andijon">Andijon</option>
                    <option value="namangan">Namangan</option>
                    <option value="buxoro">Buxoro</option>
                    <option value="toshkent">Toshkent</option>
                    <option value="xorazm">Xorazm</option>
                    <option value="samarqand">Samarqand</option>
                    <option value="xiva">Xiva</option>
                </select>
            </div>
            <div class="add-address">
                <label for="address">Манзил</label>
                <input type="text" id="address" v-model="modalUser.modalAddress" required>
            </div>
        </div>
        <div class="modal-footer">
            <button class="modal-footer__back" @click="add">Ортга</button>
            <button class="modal-footer__save" @click="modalAdd">Сақлаш</button>
        </div>
    </div>


                <div class="button-features">
                    <button class="buttons plus" @click="add">Қўшиш</button>
                    <button class="buttons change" @click="change">Ўзгартириш</button>
                    <button class="buttons minus" @click="remove">Ўчириш</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Исм Фамилия</th>
                            <th scope="col">Телефон</th>
                            <th scope="col">Вилоят</th>
                            <th scope="col">Манзил</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CustomerChild :mijoz="mijoz" v-for="(mijoz, id) in mijozlar" :key="id"/>
                    </tbody>
                </table>



</template>

<script>
    import CustomerChild from './ChildComponents/CustomerChild.vue'
    export default {
        name:"Customers",
        components:{
            CustomerChild
        },
        data(){
            return{
                success:false,
                isModal:false,
                noItem:false,
                modalUser:{
                    modalName:'',
                    modalAddress:'',
                    modalTel:'',
                    modalRegion:'',
                },
                mijozlar:[
                {
                    id: 1,
                    name: "Ergashev Javohir",
                    telefon: "+998916587848",
                    viloyat: "Andijon",
                    manzil: "Shahrihon"
                },
                {
                    id: 2,
                    name: "G'ayratjonov Yusufjon",
                    telefon: "+998916587848",
                    viloyat: "Farg'ona",
                    manzil: "Buvayda"
                },
                {
                    id: 3,
                    name: "Asraqulov ilhomjon",
                    telefon: "+998916587848",
                    viloyat: "Qo'qon",
                    manzil: "Qo'qon shahar"
                },
                {
                    id: 4,
                    name: "Ergashev Javohir",
                    telefon: "+998916587848",
                    viloyat: "Andijon",
                    manzil: "Asaka"
                },
                ],
            }
        },

        methods:{
            add(){
                this.isModal = !this.isModal
            },
            modalAdd(){
                if(this.modalUser.modalName === '' && this.modalUser.modalTel === '' && this.modalUser.modalAddress === '' && this.modalUser.modalRegion === ''){
                    this.noItem = true
                }else{
                    this.noItem = !this.noItem
                    this.mijozlar.push({
                        id:Math.round(Math.random() * 10),
                        telefon:this.modalUser.modalTel,
                        name:this.modalUser.modalName,
                        viloyat:this.modalUser.modalRegion,
                        manzil:this.modalUser.modalAddress
                    })
                    this.modalUser.modalTel = ''
                    this.modalUser.modalName = ''
                    this.modalUser.modalAddress = ''
                    this.modalUser.modalRegion = ''

                    this.isModal = !this.isModal
                }
            },
            remove(){
                this.mijozlar.shift()
            }
        }
    }
</script>

<style  scoped>
    .customer-main{
        display: flex;
    }
    .main-right{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .no-item{
        position: absolute;
        justify-self: center;
    }
    .modal-mijoz{
        display: flex;
        position: fixed;
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
    .add-region{
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