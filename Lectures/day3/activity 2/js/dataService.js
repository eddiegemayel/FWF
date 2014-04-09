angular.module("HitListApp").service("studentService", function(){
    
    var students = [{
        name : "Jeff",
        age : 12,
        GPA : 3.0
    },
        {
        name : "Bill",
        age : 27,
        GPA : 2.5
    },
     {
        name : "Steven",
        age : 21,
        GPA : 4.0
    },{
        name : "Caboose",
        age : 30,
        GPA : 2.0
    }];
            
    this.getStudents = function(){
        var tempList =  localStorage.getItem("targetList");
        students = JSON.parse(tempList) || students;

        return students;
     }               
    this.killStudent=function(otherIndex){
        students.splice(otherIndex,1);
        localStorage.setItem("targetList", JSON.stringify(students));
        
    };
    this.addStud=function(ppl){
        students.push(ppl);
                localStorage.setItem("targetList", JSON.stringify(students));
        
    document.location.hash = "#/listView";
    };
    
    this.getStudentAt = function(studIndex){
        this.getStudents();
        return students[studIndex];
    }
     
    
});