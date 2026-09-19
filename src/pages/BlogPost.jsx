import React from 'react'

import Post from '../components/Post/Post'

// media query
import '../utils/mediaQuery.css'
import { Footer } from '../components/Shared/Sections'

const BlogPost = () => {
  return (
    <div>
      <Post />
      <Footer />
    </div>
  )
}

export default BlogPost
