import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

function card({$id,title,featuredImage}) {
  return (
  <Link to={`/post/${$id}`}>
<div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
    <a href="#" class="block w-full h-full">
        <img alt="blog photo" src={service.getFilePreview(featuredImage)} class="object-cover w-full max-h-40"/>
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            {/* <p class="font-medium text-indigo-500 text-md">
                Article
            </p> */}
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                {title}
            </p>
            {/* <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p> */}
        </div>
    </a>
</div>
  </Link>  

  )
}

export default card