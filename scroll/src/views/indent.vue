<template>
    <div class="wrapper">
        <div class="main">
            订单
        </div>
        <div class="footer">
           <Footer></Footer>
       </div>
    </div>
</template>
<script>
import Footer from "../components/footer"
export default {
    props:{

    },
    components:{
        Footer
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