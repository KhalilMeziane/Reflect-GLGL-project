import React from 'react'
import { FrappeGantt } from 'frappe-gantt-react'

export default function Gant({tasks}) {
  let startTime = new Date().toISOString().substr(0,10)
  const setEndDate = (duration, list, counter)=>{
    // if(list.includes(tasks[counter-1].name)){

    // }
    startTime = new Date(new Date(startTime).setDate(new Date().getDate()+ parseInt(duration))).toISOString().substr(0,10)
    return new Date(new Date(startTime).setDate(new Date().getDate()+ parseInt(duration))).toISOString().substr(0,10)
  }
  const generateTasks = ()=>{
    console.log("tasks: ",tasks)
    let newTasks = []
    for(let i = 0 ; i < tasks.length; i++){
      newTasks.push({
        id: tasks[i].id,
        name: tasks[i].name,
        progress: 100,
        dependencies: tasks[i].previous.map(task=>task.name),
        start : startTime,
        end : setEndDate(tasks[i].duration, tasks[i].previous.map(task=>task.name, i))
      })

      // if(tasks[i].previous.length === 0){
      //   newTasks.push({
      //     id: tasks[i].id,
      //     name: tasks[0].name,
      //     progress: 100,
      //     dependencies: '',
      //     start : startTime,
      //     end : setEndDate(tasks[i].duration)
      //   })
      // }
      // else{
      //     console.log("task: ",tasks[i].previous.map(task=>task.name).includes(tasks[i-1].name))

      // }
      if(i===0){
        // newTasks.push({
        //   id: tasks[i].id,
        //   name: tasks[0].name,
        //   progress: 100,
        //   dependencies: tasks[i].previous.join(),
        //   start : startTime,
        //   end : setEndDate(tasks[i].duration)
        // })
      }
      else{
          // console.log("target: ",i-1)
          let counter = tasks[i-1].previous.length
          console.log("task: ",tasks[i].previous.map(task=>task.name).includes(tasks[i-1].name))
          // while(counter > i){
          //   newTasks.push({
          //     id: tasks[i].id,
          //     name: tasks[i].name,
          //     progress: 100,
          //     dependencies: tasks[i].previous.join(),
          //     start : startTime,
          //     end : setEndDate(tasks[i].duration)
          //   })
          //   i++
          // }
      }
      }
      console.log('newTasks:', newTasks)
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

/*
  newTasks = []
  for(let i = 0 ; i<tasks.length; i++){
    if(newTasks.length === 0){
      newTasks.push({
        id: tasks[i].id,
        name: tasks[0].name,
        progress: 100,
        dependencies: tasks[i].previous.join(),
        start : startTime,
        end : setEndDate(tasks[i].duration)
      })
    }
    else{
        let counter = tasks[i-1].split(',').length
        while(counter > i && tasks[i-1].split(',').includes(tasks[i].name)){
          newTasks.push({
            id: tasks[0].id,
            name: tasks[0].name,
            progress: 100,
            dependencies: tasks[0].previous.join(),
            start : startTime,
            end : setEndDate(tasks[0].duration)
          })
          i++
        }
      }
    }
    <script src="https://cdn.jsdelivr.net/npm/js-gantt@1.0.16/dist/js-gantt.min.js"></script>
*/

