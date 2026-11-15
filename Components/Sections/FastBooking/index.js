import React from 'react'

const FastBooking = () => {
  return (
    <div className="container  pt-0  d-flex align-items-center justify-content-center py-4">
    <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
            <div className="text-center mb-4">
                <h1 className=' booking-title'>
                    Fast Pest Control
                  
                </h1>
                <h1  className=' booking-title pr-2'>  Booking</h1>
            </div>
            <div className="d-grid booking-btn-grid">
                <button className="btn  booking-btn">
                    General Pest Control
                </button>
                <button className="btn  booking-btn">
                    Service Location
                </button>
                <button className="btn  booking-btn">
                    Termite Control Booking
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default FastBooking