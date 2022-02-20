import jsPERT from 'js-pert'
import Node from './node'

export default function usePert(activities){
    const { activitiesParams, network, criticalPath, earliestStartTimes, earliestFinishTimes, latestFinishTimes, latestStartTimes } = jsPERT(activities)
    // console.log('activities: ', jsPERT(activities))

    let xStart = 10
    let yStart = 25
    let  levels = new Map();
    var niveau = [];
    let x=0;

    const setPosition = ()=>{
        console.log("********************************")
        console.log(network);
        let verticesNumber=0;
        var keys = [];
        var topOrder = [];
        for(let tache in network){
            if(tache === "__start" ){
            }else if(tache=== "__end" ){
            }else{
                verticesNumber++;
                keys.push(tache);
            }
        }
        var ins = [];
        var indegree =[];

        for(let i=0;i<verticesNumber;i++){
            niveau[i]=[];
            indegree[i]=0;
        }


        for( let tache in network){
            if(tache === '__end' || tache === '__start' ){}else
            if(network[tache].predecessors[0] !== '__start'){
                for(let t in network[tache].predecessors ){
                    let v = keys[t]
                    //adj[1]=>[0]


                    indegree[keys.indexOf(tache)]++;
                  //  console.log(`index ${keys.indexOf(tache)}`);
                   // console.log(`indegree ${indegree[t]}`);
                   // console.log(`indegree ${indegree}`);

                    // E++;
                }
            }

        }







//         console.log(` vertices number ${verticesNumber}`);






        var q = [];
        let niv = 0;




        ins=[...indegree];
      //  console.log(`indeg  ${indegree}`)
       // console.log(`ins  ${ins}`)

        for (let i = 0; i < verticesNumber; i++) {
            if (ins[i] == 0){
                q.push(i);
                niveau[0].push(keys[i]);
            }
        }

        var topOrder=[];
        let sizePerN = q.length;
        let i = 0;
        niv++;






        // Initialiser le compteur des noeuds visites
        let cnt = 0;

        // Creer une liste pour stocker les resultats
        // un ordre topologique des noeuds


        while (q.length != 0) {

            // Extraire le debut de la file
            // et l'ajouter dans la liste de l'ordre topologique

            let u = q.shift();

            topOrder.push(u);

            // decrementer (par 1) le indegree de tous les noeuds adjacents
            // avec le noeuds que nous avons retirer

            let ls=0;
            for (let tache in network[keys[u]].successors ) {
                if(network[keys[u]].successors[tache]=== "__start" || network[keys[u]].successors[tache]=== "__end" ){}else{
                    if (--ins[keys.indexOf(network[keys[u]].successors[tache])] == 0){
                        q.push(keys.indexOf(network[keys[u]].successors[tache]));
                        niveau[niv].push(network[keys[u]].successors[tache]);
                    }
                }
                // Si le indegree devient 0, ajouter le le noeud t dans la file
            }
            ls++;
         //   console.log(`iteration ${ls}  ${q.length}`)
            i++;
            if(i == sizePerN){
                i = 0;
                sizePerN = q.length;
                niv++;
            }

            cnt++;
        }

        // Assurer qu'il n'y a pas un cycle
        if (cnt != verticesNumber) {
            console.log("Il existe un cycle dans le graphe");
            console.log(cnt);

          //  return null;
        }
       // console.log(topOrder);
       // let newNiveau=[...niveau];
       // niveau[0]=>[name:'A',]


        console.log(niveau)
     //   console.log("Active params" );

//        console.log(activitiesParams)


        //***********************
        yStart = yStart + 50

        yStart = yStart + 50
      /*  for(let tach in network){
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
        }*/
        //***********************
        //let newLevels=new Map();
            let maxlevel=0;
        for(let  i in  niveau){
            if(niveau[i].length >maxlevel){
                maxlevel=niveau[i].length
            }
        }

        console.log(`max level ${maxlevel}`)
            for (let i=0 ;i<niveau.length;i++){

       let y =50;
       console.log(niveau[i])
       let b=getX();
       console.log(`new level y  ${y}`)
       console.log(`new level x  ${b}`)

       for(let j=0;j<  niveau[i].length;j++){
          console.log(`same level y ${y}`)

          console.log(`new level x  ${b}`)
          console.log(`jjjjj x  ${ niveau[i][j]}`)
            if(niveau[i].length==1){
                y += 125 * (maxlevel-1);
                console.log(`mod ${maxlevel % 2 == 0}`)
                console.log(`max ${maxlevel  }`)
                console.log(`newy ${(maxlevel % 2 == 0)  ? 125 *( maxlevel-1) :
                    150 * maxlevel-1}`)
             //   y += 125*3;
            }else if((niveau[i].length<maxlevel) && j==0) {
                y += 125 * (maxlevel-niveau[i].length)
            }
           levels.set(
               niveau[i][j],
                [
                    b,
                    y
                ]
            )
            y += 250;
       }

  //  console.log(`new levels`)
/*    console.log(newLevels)
    //levels=[...newLevels];

       levels = new Map();
       for(let s=0;s<newLevels.length;s++){
           levels.set(s,newLevels[s])
       }
         */   console.log('new map ')
    console.log(levels)
    }


    }
    function  getX() {
        if(x===0){
            x= 50;
        }else{
            x= x+350
        }

        return x;

    }


       /* for(let tach in network){
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
        }*/

    function  getTacheLevel(t){
        for(let i =0;i< niveau.length;i++){
            for(let j=0;j<niveau[i].length;j++){
               if(niveau[i][j] === t){
                   return i;
               }
            }
        }
        return -1;
    }
    function getPos(index){
       return  levels[index]
    }
    setPosition()
    const nodes = []
   // let indexPosition = -1
    for(let tach in activitiesParams){
     //   indexPosition += 1
      //  let ind=getTacheLevel(tach);
        console.log(`${tach} ${levels.get(`${tach}`)}  `)
       // console.log(levels)
       // console.log(`ind ${ind}`)
       // console.log(levels.get(ind))
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
            position: {
                x:levels.get(`${tach}`)[0],
                y:levels.get(`${tach}`)[1],

             }
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