//Function to calculate the tip and total value of the bills array.
function calctip (bill){
    return bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.20;
    }

const tips = []
const totals = []
const bills = [22,295,176,440,37,105,10,1100,86,52]

for (let i = 0 ; i < bills.length ; i ++){
   const tip = calctip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip)
}
console.log(bills , tips, totals);


//Function to calculate the average of the numbers in an array.
function calcAverage (arr){
    let sum = 0;
    for (let i = 0 ; i < arr.length; i ++){
        sum += arr[i];
    }
    average = sum / arr.length;
        console.log(sum,average);

}

const arr = [22,295,176,440,37,105,10,1100,86,52]
calcAverage(arr)