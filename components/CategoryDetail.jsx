import { useState } from 'react'
import {  Row } from '../components/sharedstyles'
import { PostCard, GoogleAds } from '../components'
import { getPosts } from '../services';

const CategoryDetail = ({ posts }) => {
  return (
    <>
        <h2>Category Details</h2>
        <GoogleAds />
    </>
  )
}

export default CategoryDetail