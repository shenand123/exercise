<template>
    <div>
        <div class="footer">
            <router-link to='/'>首页</router-link>
            <router-link to="/find">发现</router-link>
            <router-link to="/indent">订单</router-link>
            <router-link to="/my">我的</router-link> 
        </div>
    </div>
</template>
<script>
export default {
    props:{

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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .footer{
        border-top: 1px solid #ccc;
        display: flex;
        justify-content: space-around    
    }
</style>