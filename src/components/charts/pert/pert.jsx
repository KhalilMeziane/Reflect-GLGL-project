import React from 'react'
import ReactFlow  from 'react-flow-renderer'
import Node from './node'
import usePert from './usePert'

export default function Pert({tasks}) {
    const taskList = {}
    tasks && tasks?.forEach(({name, duration, previous}) => {
        taskList[name] = {
            id:name,
            predecessors: previous.map(item=>item.name).join().split(''),
            optimisticTime: parseInt(duration),
            mostLikelyTime: parseInt(duration),
            pessimisticTime: parseInt(duration),
        }
    })
    const Nodes = usePert(taskList)
    return (
        <div style={{ height: 400 }}>
            <ReactFlow nodeTypes={{ special: Node }} elements={Nodes} />
        </div>
    )
}