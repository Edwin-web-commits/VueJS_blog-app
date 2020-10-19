export default{
    computed:{
        filteredBlogs:function(){
            return this.myblogs.filter((blog)=>{
              return blog.title.match(this.search);
            });
          }
    }
}