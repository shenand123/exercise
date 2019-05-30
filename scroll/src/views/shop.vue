<template>
    <div class="wrapper">
        <div class="header">
            店铺{{id}}
        </div>
        <div class="mian">
            <div class="nav">
                <!-- <span @click="$router.push({name:'order'})">点餐</span>
                <span @click="$router.push({name:'appraise'})">评价</span>
                <span @click="$router.push({name:'merchant'})">商家</span> -->
                <router-link to="/order">点餐</router-link>
                <router-link to="/appraise">评价</router-link>
                <router-link to="/merchant">商家</router-link>
            </div>
            <div class="content">
                 <router-view/> 
            </div>
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
            id:null
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.id=this.$route.query.id;
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
.header{
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.mian{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.nav{
    height: 40px;
    line-height: 40px;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-around;
}
.content{
    flex: 1;
    overflow: hidden;
}
</style>