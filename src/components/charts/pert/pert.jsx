import React from 'react'
import ReactFlow  from 'react-flow-renderer'
import Node from './node'
import usePert from './usePert'

export default function Pert() {
    const activities = {
        "A": {
            id: "A",
            optimisticTime: 2,
            mostLikelyTime: 6,
            pessimisticTime: 9,
            predecessors: [],
        },
        "B": {
            id: "B",
            optimisticTime: 6,
            mostLikelyTime: 9,
            pessimisticTime: 12,
            predecessors: ["A"],
        },
        "C": {
            id: "C",
            optimisticTime: 9,
            mostLikelyTime: 11,
            pessimisticTime: 19,
            predecessors: ["A"],
        },
        "D": {
            id: "D",
            optimisticTime: 12,
            mostLikelyTime: 16,
            pessimisticTime: 20,
            predecessors: ["B","C"],
        },
        "F": {
            id: "F",
            optimisticTime: 20,
            mostLikelyTime: 34,
            pessimisticTime: 45,
            predecessors: ["B"],
        },
    }
    const Nodes = usePert(activities)
    return (
        <div style={{ height: 400 }}>
            <ReactFlow nodeTypes={{ special: Node }} elements={Nodes} />
        </div>
    )
}
