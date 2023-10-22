"use client"
import Link from 'next/link'
import React from 'react'

const PlaceReservation = () => {
  return (
    <div
      style={{
        position: 'sticky',
        top: '10',
        left: '0',
        right: '0',
        zIndex: '10', // You can adjust this value as needed
       
      }}
    >
      <div className='lg:hidden md:hidden'>
        <div className='row flex flex-row items-center justify-center text-center text-white'>
          <div className='col-6 w-1/2 bg-yellow-600 h-9 flex items-center justify-center'>
          <Link href="/menu"> Place Order </Link>
          </div>
          <div className='col-6 w-1/2 bg-black h-9 flex items-center justify-center'>
          <Link href="/checkout"> Reservation </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceReservation