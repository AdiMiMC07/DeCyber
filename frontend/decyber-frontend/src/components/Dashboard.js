import React from 'react'
import "../styles/dashboard.css"

export default function Dashboard() {
  return (
    <>
      <div className='Dashboard'>
        <h1 style={{textAlign:"center"}}>Country</h1>
        <div className="dashboard-outlier d-flex justify-content-center align-items-center">
            <div className="outlier-2 d-flex flex-column justify-content-center align-items-center">
              <div className="user-status">
                  Your status
              </div>
              <div className="outlier-3 d-flex flex-row justify-content-center align-items-center">
                  <div className="member-details">
                      Team Member's Details
                  </div>
                  <div className="remaining-time">
                      Time Left
                  </div>
              </div>
            </div>
            <div className="scoreboard">
                Scoreboard
            </div>
        </div>
      </div>
    </>
  )
}
