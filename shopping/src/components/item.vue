<template>
    <div class="item">
        <dl>
            <dt>
                <img :src="data.src" alt="">
            </dt>
            <dd>
                <p>{{data.title}}</p>
                <div>
                    <b>￥:{{data.price}} </b>
                    <p>
                        <span class="check">-</span>
                        <span>{{data.count}}</span>
                        <span class="check" @click="add(data)">+</span>
                    </p>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    components:{

    },
    data(){
        return {
            list:[],
            count:0,
            sum:0
        }
    },
    computed:{

    },
    methods:{
        add(val){
            this.$emit("add",val)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .item{
        height: 100%;
        width: 100%;
    }
    dl{
        height: 100%;
        width: 100%;
        display: flex;
        padding-top: 5px;
        flex-direction: column;
    }
    dt{
        width: 90%;
        height: 100px;
        margin :0 auto;
    }
    dt img{
        width: 100%;
        height: 100%;
    }
    dd{
        line-height: 30px;
    }
    dd div{
        display: flex;
        font-size: 12px;
    }
    dd div b{
        flex: 4    
    }
    dd div p{
        flex: 6;
        display: flex;
         justify-content: space-around; 
    }
    dd div p span.check{
        height: 16px;
        width: 16px;
        text-align: center;
        line-height: 16px;
        margin-top: 7px;
        background: #ddd;
        color: #fff;
        border-radius: 5px;
    }
</style>