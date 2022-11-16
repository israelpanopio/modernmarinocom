import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
    console.log(post)
  return (
    <PageItem>
        <p>{post.title}</p>
    </PageItem>
  )
}

export default PostCard