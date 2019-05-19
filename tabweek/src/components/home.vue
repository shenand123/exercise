<template>
    <div class="wrapper">
         <div class="header">
            <span v-for="(val,index) in arr" :key="index" :class="{'active':index==ind}" @click="checkFn(val,index)">{{val.type}}</span> 
        </div>  
        <div class="main">
            <span v-if="list.length<1" class="list" style="text-align: center;line-height: 40px;">当前分类还没有面试</span>
             <div class="list" v-for="(val,index) in list" :key="index">
                    <Item :data="val"/>
            </div> 
            <!-- <div class="list" >
                <Item/>
            </div> -->
        </div>
    </div>
</template>
<script>
import dataJosn from "../data/list.json"
import Item from "./item"
export default {
    props:{

    },
    components:{
        Item
    },
    data(){
        return {
                dataJosn,
                ind:0,
                type:"未开始",
                arr:[{
                    type:"未开始"
                },{
                    type:"已打卡"
                },{
                    type:"已放弃"
                },{
                    type:"全部"
                }]
        }
    },
    computed:{
        list(){
            if(this.type=="全部"){
                return  dataJosn
            }
            else{
                return dataJosn.filter(val=>val.type==this.type)
            }
        }
    },
    methods:{
            checkFn(val,ind){
               this.type=val.type;
                this.ind=ind
            }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        background: #eee;
        flex-direction: column;
    }
    .header{
        height: 40px;
        line-height: 40px;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #ccc;
        justify-content: space-around
    }
    .header span{
        padding: 0 5px;
    }
    .header .active{
        color: skyblue;
        border-bottom: 2px  solid skyblue;
    }
    .main{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    
</style>