import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">
                We're delighted to have you <span className="text-pink-600"> Here!</span></h1>
                <p className='mt-12 '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quas eligendi molestias neque quaerat! Odio iure reprehenderit debitis sit repudiandae saepe nesciunt omnis autem dignissimos, nostrum maiores animi iste vero inventore, at, dolores nisi? Quam dolor, laudantium asperiores dolores assumenda doloribus? Quae, sunt. Quae consequuntur quaerat commodi ex ab itaque.
                </p>
               <Link to="/">
               <button className="mt-6 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700 duration-300">Back</button>
               </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
              list.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default Course
