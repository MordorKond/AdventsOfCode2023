import { open } from 'node:fs/promises';

// export function main(arr:string[]){
export async function main(){
    const file = await open('./input.txt');
    if (!file)return 'no file to read';

    //INX 0 1 2
    //RPS 1 2 3
    //RPS A B C
    //RPS X Y Z
    //LDW 0 3 6

    const RPS2 = ['A','B','C']
    const WIN = ['C','A','B']
    const LOSE = ['B','C','A']
    
    
    let score = 0;
    let test : string
    for await (const line of file.readLines()) {
    // for (const line of arr) {
        const choises = line.split(' ');
        const state =choises[1];

        if(state =='X'){
            test=RPS2[LOSE.indexOf(choises[0])]
            score += 0 + RPS2.indexOf(test)+1
        }else if(state=='Y'){
            test=choises[0];
            score += 3 + RPS2.indexOf(test)+1
        }else if(state=='Z'){
            test=RPS2[WIN.indexOf(choises[0])]
            score += 6 + RPS2.indexOf(test)+1
        }
    }

    // return test;
    return { temp: score, };
};
