class p1{

book(){

    let a =1;
    let b=3;
    console.log(a+b)
}

binding(){
    this.book()

    

    console.log("binding work")

}

pen(){
  
    console.log("using pen writing on the paper")
}

}

class c1 extends p1{
    bike(){
        super.pen()
        console.log("the colour of bike is red")
    }


}


let og1 = new c1()
og1.bike()// the colour of bike is red
og1.binding()

