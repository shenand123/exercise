<template>
    <div class="wrapper">
        <div class="main">
            首页
            <router-link to="/seach">去搜索页</router-link>
            <ul>
                <li v-for="(val,index) in arr" :key="index" @click="$router.push({path:'/shop',query:{id:val.id}})" >{{val.name}}</li>
            </ul>
        </div>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>
<script>

import BScroll from "better-scroll"
import Footer from "../components/footer"
export default {
    props:{

    },
    components:{
        Footer
    },
    data(){
        return {
            arr:[{
                    "name":"小龙虾",
                    "id":0
                },{
                    "name":"海底捞",
                    "id":1
                },{
                    "name":"虾吃虾涮",
                    "id":2
                },{
                    "name":"麻辣烫",
                    "id":3
                },{
                    "name":"小火锅",
                    "id":4
                }]
        }   
    },
    computed:{

    },
    methods:{
        // addFn(id){
        //     this.$router.push({name:'shop',params:{id:id}})
        // }
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
        flex-direction: column;
    }
    .main{
        flex: 1
    }
    .footer{
        height: 50px;
        line-height: 50px;
    }
</style>