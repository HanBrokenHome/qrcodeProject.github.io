import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { GrAction } from 'react-icons/gr'

const Error = () => {
    const Error = useRouteError();
  return (
    <div className=' text-white w-screen h-screen flex flex-col items-center bg-slate-800'>
      <GrAction className='w-52 h-52 text-white'/>
        <p className='text-2xl'>OOPS!!</p>
        {Error && (
          <div>
            <p>This page error, Because?</p>
            {Error === 404 ? (
              <div>
                <p>404</p>
                <p>Page not found</p>
              </div>
            ) : (
              <p>Mohon maaf ada kesalaahn teknisi</p>
            )}
          </div>
        )}
        <Link to="/kalkulator" className='mt-16 font-Poppins border bg-slate-900 rounded w-40 h-16 text-center text-lg  pt-4'>Back To Home</Link>
    </div>
  )
}

export default Error
