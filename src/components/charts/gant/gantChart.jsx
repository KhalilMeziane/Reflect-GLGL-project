import React from 'react'
import { Chart } from "react-google-charts"

export default function GantChart({tasks}) {
    function daysToMilliseconds(days) {
        return days * 24 * 60 * 60 * 1000
    }
      
    const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
    ]

    const setPreviousToString = (list)=>{
       const swap = list.map(item=>item.name).join()
       return swap?swap:null
    }
    
    const generateData = ()=>{
        let taskList = []
        for(let i = 0; i < tasks.length; i++ ){
            console.log('foreach tasks :', tasks[i].name)
            if(i===0){
                taskList.push([
                    tasks[i].name,
                    tasks[i].name,
                    new Date(), 
                    null,
                    daysToMilliseconds(parseInt(tasks[i].duration)),
                    100,
                    ""
                ])
            }else{
                taskList.push([
                    tasks[i].name,
                    tasks[i].name,
                    null,
                    null,
                    daysToMilliseconds(parseInt(tasks[i].duration)),
                    100,
                    setPreviousToString(tasks[i].previous)
                ])
            }
        }
        return taskList
    }
    generateData()
    const data = [columns, ...generateData()]
    return (
        <Chart chartType="Gantt" width="100%" height="100%" data={data}/>
    )
}
