import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className='text-green-500 flex align-middle justify-center mt-6 font-bold text-5xl'>Get in touch</h1>
      <div className='flex justify-center align-middle mt-10 w-[400px] mx-auto h-[60vh] bg-slate-300 rounded-xl bg-opacity-20'>
      <form className='w-full h-full flex flex-col gap-5 p-5 border' action="onSubmit" method="post">
        <input 
        className='w-full h-15 p-3 border placeholder:text-white bg-opacity-20'
        required autoComplete='off'
        type="text" 
        placeholder='Enter Your Name'
        name='username'
        />
        <input 
        className='w-full h-15 p-3 border placeholder:text-white bg-opacity-20'
        required autoComplete='off'
        type="email" 
        placeholder='Enter Your Email'
        name='email'
        />
        <textarea 
        rows={10}
        className='w-full p-3 border placeholder:text-white bg-opacity-20'
        required autoComplete='off'
        type="text"
        placeholder='Enter Your Message'
        name='message'
        />
        <button className='bg-green-500 text-black p-2 rounded-lg font-bold text-xl ' type='submit' >Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact