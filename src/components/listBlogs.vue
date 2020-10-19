<template>
  <div id="show-blogs">
    <h1>List Blogs Titles</h1>
    
      <input type="text"  v-model="search" placeholder="search blogs" />

      <div v-for="(blog,index) in filteredBlogs" :key="index" class="single-blog">
      <h2 v-customcolor>{{blog.title| toUppercase}}</h2>
     
     </div>
    
  </div>
</template> 

<script>

import searchMixins from '../mixins/searchMixins'; 

export default {
   
  data () {
    return {
       blogs:[],
       search:''
    }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
       this.blogs= data.body.slice(0,10);
      });
  },
  computed:{
 
  }, 
  //adding filters locally
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  //adding custom directives locally
  directives:{
    'customcolor':{
       bind(el,binding,vnode){
        el.style.color="#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins:[searchMixins]
}
</script>

<style>
 #show-blogs{
     max-width:800px;
     margin:0 auto;
 }
 .single-blog{
     padding:20px;
     margin:20px 0 ;
     box-sizing:border-box;
     background:#eee;
 }

 
</style>