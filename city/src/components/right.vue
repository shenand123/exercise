<template>
    <div class="right">
        <ul>
            <li v-for="(val,index) in data" :key="index":class="{'active':val.flag}"  @click="change(index)" >{{val.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['data'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        change(val){
            this.$emit("change",val)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .right{
        flex: 1;
        height: 100%;
        overflow-y: auto;
    }
    .right ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .right li{
        width: 29%;
        height: 34px;
        margin: 2%;
        border-radius: 8px;
        line-height: 34px;
        background: #fff;
        text-align: center;
    }
    .right li.active{
        background: yellow;
    }
    
</style>