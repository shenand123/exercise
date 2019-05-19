<template>
    <div class="left">
        <span v-for="(val,index) in data" :key="index" :class="{'active':ind==index}" @click="addFn(index)">{{val.name}}</span>
    </div>
</template>
<script>
export default {
    props:{
        data:Array,
        ind:Number
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        addFn(val){
            this.$emit("addFn",val)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .left{
        width: 30%;
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }
    .left span{
        height: 34px;
        line-height: 34px;
        width: 80%;
        border-radius: 8px;
        text-align: center;
        margin: 6px 10%;
        background: #fff;
    }
    .left span.active{
        background: yellow
    }
</style>