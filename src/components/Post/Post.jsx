import React, { useEffect, useState } from 'react'
import profileImg from '../../Assets/home-about-bg 1.png'

import './post.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, CircularProgress, Typography } from '@mui/material'
import { toast } from 'react-toastify'

const Post = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`https://seyi-adisa-backend.onrender.com/api/posts/${id}`)
        setBlog(response.data)
      } catch (error) {
        toast.error('Failed to load the blog post. Please try again.')
      }finally{
        setLoading(false)
      }
    }

    fetchBlogPost()
  }, [id])

  if (loading) {
    return 		<Box display="flex" justifyContent="center" height={'20vh'}  mt={4}>
					<CircularProgress sx={{color: '#000041'}} size={"25px"} />
				</Box>
  }

  if (!blog) {
    return <Box p={2}><Typography variant="h6">Blog post not found</Typography></Box>
  }
 
  function formatDate(dateString) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}  

  return (
    <div className='full-page'>
      <h1 className='top-writing'>{blog.title}</h1>

      <div className='profile-content-parent'>
        <div className='profileImg'><img src={profileImg} alt="writer image" className='profileImage'/></div>
        <div className='profile-writing'>
          <p className="pr1">{blog.author}</p>
          <p className="pr2">1 min read - {formatDate(blog.date)}</p>
        </div>
      </div>

      <div className='second-writing'>{blog.description}</div>

      <div><img src={`${`https://seyi-adisa-backend.onrender.com/${blog.image.replace(
                      /\\/g,
                      "/",
                    )}`}`} alt="" className='secondImg'/></div>
      <p className="content">
        {blog.content}
      </p>
    </div>
  )
}

export default Post
