import jsPERT from 'js-pert'
import Node from './node'

export default function usePert(activities){
    const { activitiesParams, network, criticalPath, earliestStartTimes, earliestFinishTimes, latestFinishTimes, latestStartTimes } = jsPERT(activities)
    // console.log('activities: ', jsPERT(activities))

    let xStart = 10
    let yStart = 25
    const levels = []
    const setLevels = ()=>{
        let levels = {}


        return levels
    }
    setLevels()
    const setPosition = ()=>{ 
        yStart = yStart + 50
        for(let tach in network){
            if(network[tach].predecessors[0] === "__start"){
                let height = network[tach].successors.length
                levels.push(
                    {
                        x: xStart,
                        y: (height * 90 + 40)
                    }
                )
            }else{
                xStart = xStart + 380
                let height = network[tach].successors.length
                levels.push(
                    {
                        x: xStart,
                        y: yStart * height + 50
                    }
                )
            }
        }
        
    }
    setPosition()
    const nodes = []
    let indexPosition = -1
    for(let tach in activitiesParams){
        indexPosition += 1
        nodes.push({
            id: tach,
            data:{
                label: <Node 
                    name={tach}
                    EST={earliestStartTimes[tach]} 
                    EFT={earliestFinishTimes[tach]}
                    LFT={latestFinishTimes[tach]}
                    LST={latestStartTimes[tach]}
                />
            },
            targetPosition: 'right',
            sourcePosition: 'left',
            type: 'special ',
            position: levels[indexPosition]
        })
        nodes.push(
            ...network[tach].successors.map((item)=>{
                return {
                    id: `${tach + item}`,
                    source: tach,
                    target: item,
                    type: 'smoothstep',
                    animated: false,
                    style:{
                        stroke: [ tach , item ].every((x)=>criticalPath.includes(x))? '#38a169': '#000',
                        strokeWidth: [ tach , item ].every((x)=>criticalPath.includes(x))? '4px': '1px'
                    }
                }
            })
        )
    }
    return nodes
}