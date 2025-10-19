import React from 'react'

const Queries = () => {
  return (
    <div className='main bg-blue-300'>
      <div className='heading-div'>
        <h2>We'd love to help you</h2>

      </div>
      <div className='w-full grid md:grid-cols-2 gap-10'>
        <input type="text" placeholder='Full Name'/>
        <input type="email" placeholder='Email'/>
        <input type="number" placeholder='Mobile'/>
        <input type="text" placeholder='Address'/>
        <textarea name="" id="" placeholder='Message' ></textarea>

      </div>
      <div className='w-full flex items-center justify-center p-10'>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Queries
