<template>
  <div id="app">
        <Left :data="list" :ind="ind" @addFn="addFn"/>
        <Right v-if="list[ind]" :data="list[ind].cities" @change="change"/>
  </div>
</template>

<script>
import Left from './components/left'
import Right from "./components/right"
import axios from "axios"
import dataJson from "./data/city.json"
export default {
  name: 'App',
  components: {
    Left,Right
  },
  data(){
    return {
      list:[],
      ind:0
    }
  },
  created(){
    axios.get('/city').then(data=>{
      this.list=data.data.data;
      this.list[this.ind].cities.map(val=>this.$set(val,"flag",false))
    })
  },
  watch:{
    ind(news,olds){
      this.list[news].cities.map(val=>this.$set(val,"flag",false))
    }
  },
  methods:{
      addFn(val){
        this.ind=val;
      },
      change(val){
        this.list[this.ind].cities[val].flag=!this.list[this.ind].cities[val].flag
      }
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  background: #eee;
  display: flex;
}
</style>
