angular.module("NewApp").service("service", function(){
    var list =[
        {name:"John", age:"23"},
        {name:"Eddie", age:"29"},
        {name:"Bob", age:"12"}
    ];
    this.getPeople = function(){
        return list;
    }
    this.getPerAt=function(idx){
        return list[idx];
    };
});