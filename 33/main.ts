const numbers : number[] = [1,2,3,4,5,6,7,8,9];
for (const num of numbers){
    let ordinal: string;
    if (num === 1){
        ordinal = "1st";
    }else if (num === 2){
        ordinal = "2nd";
    }else if (num === 3){
        ordinal = "3rd";
    }else{
        ordinal = num + "th"
    }
    console.log(ordinal);
    
}