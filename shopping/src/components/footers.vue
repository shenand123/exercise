<template>
    <div class="wrapper">
        <span>总件数：{{options}}</span>
        <span>总价：{{pirces}}</span>
    </div>
</template>
<script>
export default {
    props:["options","pirces"],
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
        height: 100%;
        width: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
    }
    .wrapper span{
        width: 40%;
        text-align: left
    }
</style>