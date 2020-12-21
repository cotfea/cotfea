
const People = (function(){

  const People_ = function(name){
    this.name = name
    return(this)
  }

  People_.prototype.hello = function(){
    return(`hello, I'm ${this.name}.`)
  }

  return(People_)

})()

const pp = new People()
console.log(pp.hello())
console.log(pp.name)
