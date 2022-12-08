

const mongoose = require('mongoose')
const express=require('express');
const router=express.Router()
const blogController=require('../controllers/blogController')
//const Blog=require('../models/blogs')




router.get('/',blogController.blog_index


    /*
    async(req,res)=>{
    try{
    const blogs=await Blog.find().sort({createdAt:-1}) ;
    res.render('index', { title: 'blogs', blogs });
  }
    catch(err){
  res.send(err)
    }
     }*/
  
 )
  
  //post blogs
  router.post('/',blogController.blog_create_post
/*
  async(req,res)=>{
  const blog=new Blog(req.body)
   const result=await blog.save()
   console.log(result)
   res.redirect('/blogs')
  
  }*/
  
  )
  
  router.get('/:id',blogController.blog_details
  /*
  async(req, res) => {
    //const blog=await Blog.find({_id:req.params.id})
    const blog=await Blog.findById(req.params.id)
    console.log(blog)
    res.render('details', { title: 'details' ,blog:blog});
  
   // res.send(blog)
  }*/
  
  
  
  );
  
  
  
  router.delete('/:id',blogController.blog_delete
  /*
  async(req, res) => {
    //const blog=await Blog.find({_id:req.params.id})
    const blog=await Blog.findByIdAndDelete(req.params.id)
    if (!blog) return res.status(404).send('The genre with the given ID was not found.');
    res.json({redirect:'/blogs'})
  
    //console.log(blog)
    //res.render('details', { title: 'details' ,blog:blog});
   // res.redirect('/blogs')
  
  
   // res.send(blog)
  
  }*/
  
  );

  module.exports=router
