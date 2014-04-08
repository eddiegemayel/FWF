angular.module("tacoApp").service("tacoService",function(){
    var tacos = [{type:"Fish"},{type:"Beef"},{type:"Chicken"}];
    this.getTacos = function(){
        var tacosLS = JSON.parse(localStorage.getItem("tacoList")) || tacos;
        tacos=tacosLS;
        return tacos;
    }
    
    this.addTacos = function(newTaco) {
        tacos.push({type:newTaco});
        localStorage.setItem("tacoList", JSON.stringify(tacos));
        
    }
    
    this.delTaco = function(whatever){
        tacos.splice(whatever,1);
        localStorage.setItem("tacoList", JSON.stringify(tacos));
        
    }
    
});