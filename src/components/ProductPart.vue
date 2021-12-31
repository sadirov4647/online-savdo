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
                    <th>ok</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Аёллар бўлими</td>
                    <td>rasm</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Аёллар бўлими</td>
                    <td>rasm</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Аёллар бўлими</td>
                    <td>rasm</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Аёллар бўлими</td>
                    <td>rasm</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:"ProductPart",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    table{
        display: table-row;
    }
    td{
        padding-left: 25px;
    }
    th{
        padding: 20px 0;
        background-color: #2C3E50;
        color: #fff;
        text-align: center;
    }
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
</style>