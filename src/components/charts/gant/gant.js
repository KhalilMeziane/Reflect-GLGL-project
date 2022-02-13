import React from 'react'
import { FrappeGantt } from 'frappe-gantt-react'

export default function Gant({tasks}) {
  let startTime = new Date().toISOString().substr(0,10)
  const setEndDate = (duration)=>{
    startTime = new Date(new Date(startTime).setDate(new Date().getDate()+ parseInt(duration))).toISOString().substr(0,10)
    return new Date(new Date(startTime).setDate(new Date().getDate()+ parseInt(duration))).toISOString().substr(0,10)
  }
  const generateTasks = ()=>{
      const newTasks = []
      tasks.forEach(task => {
        newTasks.push({
            id: task.id,
            name: task.name,
            progress: 100,
            dependencies: task.previous.join(),
            start : startTime,
            end : setEndDate(task.duration)
        })
      })
      return newTasks
  }

  return (
    <div>
        <FrappeGantt
            tasks={generateTasks()}
            onDateChange={(task, start, end) => console.log(task, start, end)}
            onProgressChange={(task, progress) => console.log(task, progress)}
            onTasksChange={tasks => console.log(tasks)}
        />
    </div>
  )
}
