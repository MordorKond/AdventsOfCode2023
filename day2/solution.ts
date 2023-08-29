import { open } from 'node:fs/promises';

// export function main(arr:string[]){
export async function main(){
    const file = await open('./input.txt');
    if (!file)return 'no file to read';

    //INX 0 1 2
    //RPS 1 2 3
    //LDW 0 3 6
    //RPS A B C
    //RPS X Y Z

    const RPS = ['X','Y','Z','X']
    const RPS2 = ['A','B','C','A']
    
    let score = 0;
    let tempTest = [];
    for await (const line of file.readLines()) {
    // for (const line of arr) {
        const choises = line.split(' ');
        const elf = RPS.indexOf(choises[1]);
        const opo = RPS2.indexOf(choises[0]);
        let temp = elf+1
        score+=temp;
        tempTest.push(temp);
        const result = elf-opo;
        const resultAbs = Math.abs(result)

        if(resultAbs==0){
            temp=3
            score+=temp
            tempTest.push(temp)
        }
        else if(resultAbs==1){
            temp=result>0?6:0
            score+=temp
            tempTest.push(temp)
        }
        else if(resultAbs==2){
            temp=result>0?0:6
            score+=temp
            tempTest.push(temp)
        }

    }
    return score;
    // return { temp: score, tempTest };
};
