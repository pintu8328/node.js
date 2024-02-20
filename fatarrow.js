const multipleOfTwoNumber=(a,b)=>{
    return a*b
}
console.log(multipleOfTwoNumber(5,6))

class Student{
    constructor(name,age,mark){
        this.name=name;
        this.age=age;
        this.mark=mark;
    }
    placement=(minAge)=>{
        return  (minMark)=>{
            if(this.age>minAge && this.mark>minMark){
                console.log(this.name+"is eligible for placement")
            }else{
                console.log(this.name+"is not eligible for placement.")
            }
        }
    }
}
let pintu= new Student("pintu",25,35)
console.log(pintu.placement(18)(40))