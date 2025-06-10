import React from 'react'
import Daydot from './Daydot/Daydot'
import EKnightMa from './E-Knight-ma/EKnightMa'
import TaskManager from './TaskManager/TaskManager'

export default function Projects() {
  return (
      <div>
          <h2>Projects</h2>
          <div>
              <Daydot />
              <EKnightMa />
              <TaskManager/>
          </div>
    </div>
  )
}
