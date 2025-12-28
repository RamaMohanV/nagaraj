class parent1{

book(){

    let a =1;
    let b=3;
    console.log(a+b)
}

pen(){

    console.log("using pen writing on the paper")
}

}

class child1 extends parent1{

bike(){
    console.log("riding on the bike")
}


}

let obj1 = new child1()
obj1.book()
obj1.pen()
obj1.bike()