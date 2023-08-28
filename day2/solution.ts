import { open } from 'node:fs/promises';

export async  function main(){
    const file = await open('./input.txt');
    if (!file)return 'no file to read';

    //RPS 1 2 3
    //LDW 0 3 6
    //RPS A B C
    //RPS X Y Z

    const RPS = ['A','B','C','A']
    const RPS2 = ['X','Y','Z','X']
    
    for await (const line of file.readLines()) {
        const choises = line.split(' ');
        const elf = choises[0]
        const opo = choises[1]
        let temp = 0;
        temp+=RPS.indexOf(elf)+1;
        if(RPS.indexOf(elf)<RPS2.indexOf(opo))temp+=0;
        if(RPS.indexOf(elf)==RPS2.indexOf(opo))temp+=3;
        if(RPS.indexOf(elf)>RPS2.indexOf(opo))temp+=6;
    
        return { line, temp };
    }
};
