<template>
  <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>Content:{{blog.content}}</article>
      <p>Author:{{blog.author}}</p>
      <ul>
          <li v-for="(category,index) in blog.categories" :key="index">Category:{{category}}</li>
      </ul>
  </div>
</template>

<script>

export default {
   
  data () {
    return {
      id:this.$route.params.id, //will get the id parameter from the current active route
      blog:{}
    }
  },
  created(){
      this.$http.get('https://vue-my-blog-d0ede.firebaseio.com/posts/'+ this.id+ '.json').then((data)=>{
          return data.json();
          
      }).then((data)=>{
          this.blog=data
      });
  }
}
</script>

<style>

 
</style>
