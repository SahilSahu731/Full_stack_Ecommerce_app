// import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (event)=> {
        event.preventDefault()
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20% off</p>
      <p className="text-gray-400 mt-3">Get our advance feature and experience the most profitable purchases </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-2 mx-auto my-6 pl-3 border">
        <input className="w-full sm:flex-1 outline-none " type="email" placeholder="Enter Your Email" required/>
        <button className="bg-black text-white text-xs px-10 py-4" type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
