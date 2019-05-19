<template>
    <div class="wrapper">
        <h3>{{data.tit}}</h3>
        <p>{{data.address}}</p>
        <p>面试时间：{{data.time}}</p>
        <span class="top">{{data.top}}</span>
        <span class="bottom">{{data.bottom}}</span> 
    </div>
</template>
<script>
export default {
    props:["data"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .wrapper{
        height: auto; 
        width: 100%;
        margin: 10px 0;
        background: #fff;
        padding: 0 10px;
        position: relative;
    }
    h3{
        line-height: 40px;
    }
    p{
        width: 90%;
        line-height: 34px;
    }
    span{
        position: absolute;
        right: 20px;
        padding:  3px 5px;
    }
    .top{
        top: 10px;
        color: red;
        background: plum

    }
    .bottom{
        bottom: 10px;
        color: #ccc;
        background: #eee;
    }
</style>