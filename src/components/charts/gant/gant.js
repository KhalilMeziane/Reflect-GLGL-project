import React from 'react'
import { FrappeGantt } from 'frappe-gantt-react'

var tasks = [
    {
      id: 'Task 1',
      name: 'Redesign website',
      start: '2016-12-28',
      end: '2016-12-31',
      progress: 20,
      dependencies: 'Task 2, Task 3',
      custom_class: 'bar-milestone' // optional
    }
]
export default function Gant() {
  return (
    <div>
        <FrappeGantt
            tasks={tasks}
            // viewMode={this.state.mode}
            // onClick={task => console.log(task)}
            onDateChange={(task, start, end) => console.log(task, start, end)}
            onProgressChange={(task, progress) => console.log(task, progress)}
            onTasksChange={tasks => console.log(tasks)}
        />
    </div>
  )
}
