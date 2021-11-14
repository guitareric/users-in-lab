import React from 'react'
import CleanroomUsers from '../../components/CleanroomUsers'
import PrototypingLab from '../../components/PrototypingLab'
import BackendLab from '../../components/BackendLab'

export default function PageContent() {
  return (
    <div className="row">
      <div className="col-sm-8" style={{ minHeight: '100vh' }}>
        <CleanroomUsers />
      </div>

      <div className="col-sm-4">
        <div style={{ minHeight: '50vh' }}>
          <PrototypingLab />
        </div>
        <div style={{ minHeight: '50vh' }}>
          <BackendLab />
        </div>
      </div>
    </div>
  )
}
