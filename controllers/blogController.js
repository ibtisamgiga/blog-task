const Blog=require('../models/blogs')

const blog_index=async(req,res)=>{
    try{
        const blogs=await Blog.find().sort({createdAt:-1}) ;
        res.render('blogs/index', { title: 'blogs', blogs });
      }
        catch(err){
      res.send(err)
        }
      
  
}

const blog_details= async(req, res) => {
    const blog=await Blog.findById(req.params.id)
    console.log(blog)
   
    if (!blog) return res.status(404).render('404', { title: '404' });
    res.render('blogs/details', { title: 'details' ,blog:blog});
  
  }

const blog_create_post=async(req,res)=>{
  
    const blog=new Blog(req.body)
     const result=await blog.save()
     console.log(result)
     res.redirect('/blogs')
    
    }


    const blog_delete=async(req, res) => {
        const blog=await Blog.findByIdAndDelete(req.params.id)
        if (!blog) return res.status(404).render('404', { title: '404' });;
        res.json({redirect:'/blogs'})
   }


module.exports={
    blog_index,
    blog_details,
    blog_create_post,
    blog_delete
}