<template>
  <div id="add-blog">
     <h2>Add a New Blog Post</h2>

      <b-form  v-if="!submitted">
        <b-form-group
        id="input-group-1"
        label="Title"
        label-for="input-1"
        >
      
        <b-form-input
          id="input-1"
          required
          placeholder="Enter your blog title"
        ></b-form-input>
           <label for="textarea">Blog Content:</label>
          <b-form-textarea id="textarea" v-model.lazy="blog.content" placeholder="Write your blog here..." rows="3" max-rows="6"></b-form-textarea>

      </b-form-group>

     

      <!-- <form v-if="!submitted">
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required/>
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content" ></textarea> <br> -->

      <div>
      <b-form-group label="Select category:">
      <b-form-checkbox-group id="checkbox-group-2" name="flavour-2">
        <b-form-checkbox value="sports" v-model="blog.categories">Sports</b-form-checkbox>
        <b-form-checkbox value="education" v-model="blog.categories">Education</b-form-checkbox>
        <b-form-checkbox value="politics" v-model="blog.categories">Politics</b-form-checkbox>
        <b-form-checkbox value="Business" v-model="blog.categories">Business</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
      </div>
     
         
        <label>Author:</label>
        <b-form-select v-model="blog.author" :options="options"></b-form-select><br><br>

       <b-button variant="outline-primary" v-on:click.prevent="post">Add Blog</b-button>
    <!-- </form>  -->
   </b-form>

    <div v-if="submitted">
      <p>Thanks for adding the post</p>
    </div>

      <div id="preview">
         <h3>Preview Blog</h3>
         <p>Blog title:{{blog.title}}</p>
         <p>Blog content:</p>
         <p>{{blog.content}}</p>
         <p>Categories:</p>
          <ul>
            <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
          </ul>
          <p>Author:{{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
        blog:{
             title:'',
             content:'',
             categories:[],
             author:''
            
        },
        authors:[
            'DAILY SUN', 'SABC EDUCATION','BBC NEWS','SABC SPORTS'
        ],
        options:[  { value: 'DAILY SUN',text:'Daily sun'},
          { value: 'SABC EDUCATION',text:'SABC Education'},
          { value: 'BBC NEWS',text:'BBC News'}],
        submitted:false,
        
    }
   
  },
 methods:{
        post:function(){
            this.$http.post('https://vue-my-blog-d0ede.firebaseio.com/posts.json',this.blog).then((data)=>{
                console.log(data);

                this.submitted=true;
            });

            
        }
    }

}
</script>

<style>
 #add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
   background:#eee;
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes b-form-checkbox{
display:inline-block;
margin-right:10px;
}
#checkboxes label{
    display:inline-block;
}
</style>