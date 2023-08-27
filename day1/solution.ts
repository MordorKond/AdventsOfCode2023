import { open } from 'node:fs/promises';

export async  function main(){
    const file = await open('./input.txt');
    if (!file)return 'no file to read';
    var elfId : number = 1;
    var calloriesSum: number = 0;
    var topElfsCount: number = 3;
    var topElfIds:number[]= []
    var topElfBags:number[]= []

    for await (const line of file.readLines()) {
        if(line.length<1) {
            for (let index = 0; index < topElfsCount; index++) {
                const element = topElfBags[index];
                if(!element){
                    topElfIds[index]=elfId;
                    topElfBags[index]=calloriesSum;
                    break;
                }
                if(topElfBags[topElfsCount-1]>calloriesSum)break;
                if(element<calloriesSum){
                    topElfIds=[...topElfIds.slice(0,index), elfId, ...topElfIds.slice(index)] ;
                    topElfBags=[...topElfBags.slice(0,index), calloriesSum, ...topElfBags.slice(index)] ;
                    topElfIds.pop();
                    topElfBags.pop();
                    break;

                }
            }
            calloriesSum=0;
            elfId++;
        }else {
            calloriesSum = calloriesSum + (+line);
        }
    }
    let total=0;
    for (let index = 0; index < topElfBags.length; index++) {
        total += topElfBags[index];
    }
    return{bags:topElfBags,elfs:topElfIds,total}
} 
