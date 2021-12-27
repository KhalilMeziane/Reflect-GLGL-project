import jsPERT from 'js-pert'
import Node from './node'

export default function usePert(activities){
    const { activitiesParams, network, criticalPath } =  jsPERT(activities)
    console.log('activities: ', jsPERT(activities))
    console.log('network: ', Object.values(network))

    const nodes = []
    let indexPosition = 0
    for(let tach in activitiesParams){
        indexPosition += 1
        // push nodes here
        nodes.push({
            id: tach,
            data:{
                label: <Node expectedTime={activitiesParams[tach].expectedTime} name={tach}/>
            },
            targetPosition: 'right',
            sourcePosition: 'left',
            type: 'special ',
            // here we need logic for levels
            position: { x: (indexPosition*200 + 100), y: (indexPosition*30) },
        })
        // push relation between node parent and his children
        nodes.push(
            ...network[tach].successors.map((item)=>{
                return {
                    id: `${tach + item}`,
                    source: tach,
                    target: item,
                    type: 'step',
                    animated: false,
                    style:{
                        stroke: [ tach , item ].every((x)=>criticalPath.includes(x))? '#38a169': '#000',
                        strokeWidth: [ tach , item ].every((x)=>criticalPath.includes(x))? '4px': '1px'
                    }
                }
            })
        )
    }
    console.log('nodes: ', nodes)
    return nodes
}

/*

    cons level = () => {

    }

*/