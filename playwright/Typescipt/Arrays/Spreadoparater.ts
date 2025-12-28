let firstarray:string[][]=[['ravi','raju'],['pavan','krishna']]

console.log("normal way"+firstarray)
let secondarray:string[][]=[['sai','ramya'],...firstarray,['raju','rani']]

console.log("after spread operates",+secondarray)