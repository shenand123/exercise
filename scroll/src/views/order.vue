<template>
    <div class="wrapper">
        <div class="left">
            <div>
                <p 
                    v-for="(val,index) in list" 
                    :key="index" 
                    @click="addFn(index)"
                    :class="{'active':index==ind}"
                >{{val.name}}</p>
            </div>
        </div>
        <div class="right">
            <div class="box"  ref="rightList">
                <Right :data="list"></Right>
            </div>
        </div>
    </div>
</template>

<script>
import Right from "../components/right"
import axios from "axios"
import BScroll from "better-scroll"
export default {
    data(){
        return {
            ind:0,
            arr:[],
            list:[],
            scrollY:0,
            leftBscroll:null,
            rightBscroll:null,
        }
    },
    components:{
       Right    
    },
    computed:{
        getInd(){
           for(let x=0;x<this.arr.length;x++){
               let arr1=this.arr[x];
               let arr2=this.arr[x+1];
               if(arr2&&(arr1<this.scrollY&&this.scrollY<arr2)){
                   return x
               }
           }
        }
    },
    methods:{
        addFn(val){
            let child=this.$refs.rightList.children[0].children;
            this.rightBscroll.scrollToElement(child[val],100)
            this.ind=val;
        },
        init(){
            this.leftBscroll=new BScroll(".left",{
                click:true
            })
            this.rightBscroll=new BScroll(".right",{
                probeType:3
            })
            this.rightBscroll.on("scroll",(res)=>{
                this.scrollY=Math.abs(res.y);
                this.ind=this.getInd;
            })
        },
        scrollHeight(){
            let h=0;
            this.arr.push(h)
            let child=this.$refs.rightList.children[0].children;
            for(let i=0;i<child.length;i++){
                h+=child[i].offsetHeight;
                this.arr.push(h)
            }
            this.arr.push(this.$refs.rightList.children[0].offsetHeight+20)
        }
    },
    created(){
        axios.get("/api/getData").then(res=>{
            this.list=res.data.data.goods;
            this.$nextTick(()=>{
                this.init();
                this.scrollHeight();
            })
        })
    }
}
</script>
<style scoped  lang="">
    .wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    .left{
        flex: 3; 
        border-right: 1px solid #ccc;
    }
    .left p{
        width:100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px
    }
    .left p.active{
        color:red
    }
    .right{
        flex: 7;
        display: flex;
        flex-direction: column;
    }
</style>