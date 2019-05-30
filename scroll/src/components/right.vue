<template>
    <div class="wrapper">
        <div class="box" v-for="(val,index) in data" :key="index" >
            <h3>{{val.name}}</h3> 
            <dl v-for="(item,ind) in val.foods" :key="ind">
                <dt><img :src="item.image" alt=""></dt>
                <dd>
                    <p>{{item.name}}</p>
                    <p>{{item.description}}</p>
                    <p>价格:￥{{item.price}}</p>
                </dd>
            </dl>
        </div>
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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}
 .box{
     width: 100%;
     height: auto;
     padding: 0 10px;
 }
 .box h3{
     line-height: 40px;
     font-weight: 400;
     font-size: 14px;
 }
 .box dl{
     height: 100px;
     display: flex;
 }
 .box dl dt{
     width: 80px;
     height: 80px;
     margin: 10px;
 }
 .box dl dt img{
     width: 100%;
     height: 100%;
 }
 .box dl dd{
     padding-top: 5px;
     flex:1;
     line-height: 30px;
 }
</style>