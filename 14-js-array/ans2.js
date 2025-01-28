const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

 ages.sort();
console.log(ages)

let max=ages[0];
// for (let index = 0; index < ages.length; index++) {
//     if(max<ages[index])
//     max=ages[index]  }

ages.forEach(item =>
   { if(max<item)
    max=item; }
)
console.log("maximum element is ", max);

let min=ages[0];
for (let index = 0; index < ages.length; index++) {
    if(min>ages[index])
    min=ages[index]
}
console.log("minimum element is ", min);

// 2nd method using spread op
// const minimum = Math.min(...ages);
// const maximum = Math.max(...ages);
// console.log(`maximum is ${maximum} and minimum is ${minimum}`);


// find median 
function findMedian (array){
    let n = array.length;
    let median=0;
    if(n%2==0){
        median = (array[n/2]+array[(n/2)+1])/2;
    } else {
        median=array[n/2]/2;
    }
    return median;
}
const answer= findMedian(ages);
console.log("median is ",answer);

// average age
function findAvg(arr){
    let n= arr.length;
    let avg=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum +arr[i];
    }
    avg = sum/n;
    return avg;
}
const average= findAvg(ages);
console.log("the average is ", average);

// range of ages
let range =Math.max(...ages)-Math.min(...ages) ;
console.log(`the range is ${range}`)

const absDiffMin = Math.abs(Math.min(...ages) - average);
const absDiffMax = Math.abs(Math.max(...ages) - average);

if(absDiffMax>absDiffMin){
    console.log("absolute difference between max and average is greater");
} else if(absDiffMax<absDiffMin){
    console.log("absolute difference between min and average is greater");
} else {
    console.log("absolute differences are same");
}

// const ages = [19, 22, 19, 24, 20, 25, 27, 24, 25, 24];
// ages.sort();
// console.log(ages)
// console.log(`minimum No is ${ages[0]} and maximum No is ${ages[ages.length-1]}`)
// // let maxNo = Number.MIN_SAFE_INTEGER;
// // let minNo = Number.MAX_SAFE_INTEGER;
// // ages.forEach((e)=>{
// //     if(e>maxNo)
// //         maxNo=e;
// //     if(e<minNo)
// //         minNo=e; })
// // console.log(maxNo);
// // console.log(minNo);

// //finding median age
// let median =null;
// let agesLength= ages.length;
// let half = Math.floor(agesLength/2);
// if(agesLength % 2 ==0){
//      median = Math.floor((ages[half] + ages[half + 1])/2);
// } else {
//     median= ages[half];
// }
// console.log(`median age is ${median}`);

// finding average
