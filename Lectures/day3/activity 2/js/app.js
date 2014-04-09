var app = angular.module("HitListApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/listView",
          {templateUrl: "parts/listView.html" ,
            controller: "theList"
          }
         )
    .when("/detail/:studentIndex",
          {templateUrl: "parts/detail.html" ,
            controller: "theDetail"
          }
         )
    .when("/addItem",
          {templateUrl: "parts/addItem.html" ,
            controller: "theForm"
          }
         )
    .otherwise({redirectTo: "/listView"})
});


app.controller("theList", function($scope, studentService){
    $scope.students = studentService.getStudents();
    $scope.pewpew=function(index){
        studentService.killStudent(index);
    };
});

app.controller("theDetail", function($scope,studentService, $routeParams){
    $scope.student = studentService.getStudentAt($routeParams.studentIndex);
});

app.controller("theForm", function($scope,studentService){
    $scope.testSubject ="vic";
    $scope.addNoob=function(){            studentService.addStud({name:$scope.repName,age:$scope.repAge,GPA:$scope.repGPA})
    };
});