"use strict"

let worker = [5, 15, 40, 10];
let zp = [10000, 25000, 50000, 100000];
let tax = 0.20;
 
function array(worker, zp) {
    let sum = 0;
    let sumWorker = 0;
    let avg = 0;
    
    for (let i = 0; i < zp.length; i++) {
        sum += Math.floor(zp[i] * tax * worker[i]);
    }
 
    for (let i = 0; i < worker.length; i++) {
        sumWorker += Math.floor(worker[i])
        avg = Math.floor(sum / sumWorker);
    }
 
    
    return {
        sum: sum,
        avg: avg
        
    }
}console.dir(array(worker, zp))