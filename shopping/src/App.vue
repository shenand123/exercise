<template>
  <div id="app">
    <div class="main">
      <ul>
        <li v-for="(val,index) in list" :key="index">
          <Item :data="val" @add="add"/>
        </li>
      </ul>
    </div>
    <div class="footer">
      {{countAll}}
      {{priceAll}}
      <Footer :options="count" :pirces="pirce"/>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Footer from "./components/footers"
import Item from "./components/item"
export default {
  name: 'App',
  data(){
    return {
      list:[],
      arr:[],
      count:0,
      pirce:0
    } 
  },
  components: {
    Footer,Item
  },
  computed:{
      countAll(){
       this.count=this.list.filter(val=>val.count>0).reduce((num,next)=>num+next.count,0)
      },
      priceAll(){
        this.pirce=this.list.filter(val=>val.count>0).reduce((num,next)=>num+next.count*next.price,0).toFixed(2)
      }
  },
  created(){
    axios.get("/api").then(data=>{
      this.list=data.data.data;
    })
  },
  methods:{
    add(val){
      if(!this.arr.includes(val)){
       this.arr.push(val)
      }
      val.count++;
    }
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow-y: auto;
}
.main ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}
.main ul li{
  height: 170px;
  width: 29%;
  margin:5px 2%;
}
.footer{
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #ccc;
  font-size: 20px;
  background: #eee;
}
</style>
