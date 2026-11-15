import React from 'react'
const ratings = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 8 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 2 },
  ]
const GoogleReviewTwo = () => {
  return (
         <div className="gog-rev-two-wrapper">
      <div className="gog-rev-two-container">
        <h2 className='customer-review-h2'>Customer Review</h2>
        <div className="gog-rev-two-header">
          <h2 className="gog-rev-two-title">
            Google review Summary
            <svg 
    width="50" 
    height="45" 
    viewBox="0 0 50 45" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className='gog-rev-two-info'
  >
    <rect width="50" height="45" rx="4" fill="currentColor"/>
    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="24">i</text>
  </svg>
            {/* <img src="/images/info-icon.png" alt="Info" className="gog-rev-two-info" /> */}
          </h2>
        </div>

        <div className="gog-rev-two-content">
          <div className="gog-rev-two-ratings">
            {ratings.map(({ stars, percentage }) => (
              <div key={stars} className="gog-rev-two-rating-row">
                <span className="gog-rev-two-stars">{stars}</span>
                <div className="gog-rev-two-bar-container">
                  <div 
                    className="gog-rev-two-bar" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="gog-rev-two-summary">
            <h2 className="gog-rev-two-score">4.8</h2>
            <div className="gog-rev-two-stars-display">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="/images/star.png"
                  alt="Star"
                  className={`gog-rev-two-star ${index < 4 ? 'filled' : ''}`}
                />
              ))}
            </div>
            <h3 className="gog-rev-two-total">9,546 reviews</h3>
          </div>
        </div>

        <button className="gog-rev-two-button">
          Write Review
        </button>
      </div>
    </div>
  )
}

export default GoogleReviewTwo