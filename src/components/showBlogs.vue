<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    
       <!-- <input type="text"  v-model="search" placeholder="search blogs" > -->
      <b-form-input id="input-1" v-model="search" required placeholder="Search blogs by title"></b-form-input>

      <div v-for="(blog,index) in filteredBlogs" :key="index" class="single-blog">
      <router-link v-bind:to=" '/blog/'+ blog.$id "> 
        <h4 v-customcolor>{{blog.title| toUppercase}}</h4>
      </router-link>
  
       <article>{{blog.content}}</article>
     </div>
    
  </div>
</template> 

<script>

import searchMixins from '../mixins/searchMixins'; 

export default {
   
  data () {
    return {
     //  blogs:myblogs,
       search:''
    }
  },
  created(){
      // this.$http.get('https://vue-my-blog-d0ede.firebaseio.com/posts.json').then((data)=>{
      //  console.log(data);
      //  return data.json();
      // }).then((data)=>{
      //   var blogsArray=[];
      //   for(let key in data){
      //    data[key].id=key; //adding an id property to the current blog object we are on
      //    blogsArray.push(data[key]);
      //   }
      //   this.blogs=blogsArray;
      // });

      return this.$store.commit('setEvent');
  },
  computed:{
     myblogs(){
         return this.$store.state.events //accessing the data(state) in the store
      }
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
#show-blogs a{
    color: #444;
    
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    }
 
</style>