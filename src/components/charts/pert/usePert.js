import jsPERT from 'js-pert'
import Node from './node'

export default function usePert(activities){
    const { activitiesParams, network, criticalPath } = jsPERT(activities)
    console.log('activities: ', jsPERT(activities))

    let xStart = 25
    let yStart = 25
    const levels = []
    const setPosition = ()=>{ 
        yStart = yStart + 50
        for(let tach in network){
            if(network[tach].predecessors[0] === "__start"){
                let height = network[tach].successors.length
                levels.push(
                    {
                        x: xStart,
                        y: height * 80 + 25
                    }
                )
            }else{
                xStart = xStart + 400
                let height = network[tach].successors.length
                levels.push(
                    {
                        x: xStart,
                        y: yStart * height + 35
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
            // 
            // position: { x: indexPosition === 1? 40:indexPosition * 200, y: network[tach].successors.length * 70 * indexPosition },
            position: levels[indexPosition]
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
    return nodes
}

/*

    cons level = (tach, index) => {
        // predecessor = tach
        if(index === 1){
            return {
                x: 50,
                y: network[tach].successors.length * 45
            }
        }else{
            if(){

            }
        }
    }


    const setLevels = (network)=>{
        const levels = []
        const counter = 1

        for(let tach in network){
            const target = network[tach]
            if(counter === 1){
                levels.push({
                    tach: tach,
                    level: counter,
                    height: network[tach].successors.length
                })
            }else{
                if(counter === 2){
                    const siblings = levels[counter-1].height
                    // levels[counter-1].height
                }
            }


            counter++
        }
    }

*/



/*
        for(let tach in network){
            const levels = {}
            const counter = 1

            // push first node
            levels[tach] = counter

            // push successors of first node
            if(counter === 1){
                network[tach].successors.foreach(item=>{
                   levels[item] = counter + 1
                })
            
            }else{


            }
        counter++
        }


*/
/*
 [
    {
        tach: string,
        level: number
    }
 ]
*/


/*
    const array =   Object.entries(network).map((e) => ( { [e[0]]: e[1] } ))
    const levels = {}
    const counter = 1
    for(let i = 2, i<= array.length ,i++){
        levels[Object.keys(array[i])[0]] = {
            level: counter,
            height: array[i].successors.length
        }
        if(i === 2){
            array[i].successors.foreach(item=>{
                levels[item] = {
                    level: counter + 1
                }
            })
        }else{
            if(!levels.keys().includes(Object.keys(array[i])[0])){
                // height: network[tach].successors.length
                levels[Object.keys(array[i])[0]]={
                    level: counter + 1,
                    siblings: levels[]
                }
            }
        }
        counter++
    }

*/

/*
    let xStart = 0
    let yStart = 0
    const setPosition = (tach)=>{
         xStart = xStart + 200
           yStart = yStart + 50 
        if(network[tach].predecessors[0] === "__start"){
               let height = network[tach].successors.length
                return {
                    x: xStart,
                    y: height * 50 + 25
                }
           }else{
                let height = network[network[tach].predecessors[0]].successors.length
                return {
                    x: xStart,
                    y: yStart * height + 25
                }
           }
          
    }





*/