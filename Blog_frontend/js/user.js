let app = angular.module('UserApp',[]);


// const params = new URLSearchParams(document.location.search);
// const $id = params.get("id");

//     var link1 = document.getElementsByClassName("nav-link-dashboard");   
//     link1.href = 'http://127.0.0.1:5500/user.html?id='+$id;
//     console.log(link1)

//     var link2 = document.getElementsByClassName("nav-link-Feed"); 
//     link2.href = 'http://127.0.0.1:5500/login.html?id='+$id;
//     console.log(link2)


app.controller("UserCtrl",($scope, $http, $window)=>{

    $http.defaults.headers.post["Content-Type"] = "application/json";
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    console.log(id);
    $scope.link1='http://127.0.0.1:5500/user.html?id='+id;
    $scope.link2='http://127.0.0.1:5500/user.html?id='+id;

    $scope.ViewMyBlogs =()=>{

        $http.get("http://www.localhost:8080/user/viewMyBlogs", {params:{"userId": id}}).then((data)=>{
            console.log(data);
            return data.data;
        }).then((objectData)=>{
            console.log(objectData);
            let tableData="";
            objectData.map((values)=>{
                tableData+=`<tr>
                <td>${values.blogId}</td>
                <td>${values.content}</td>
                <td>
                    <button class="btn btn-success" ng-click="$scope.ViewBlog(values.blogId)"> View </button>
                    <button class="btn btn-danger"  (click)=""> Edit </button>
                </td>
              </tr>`;
            });
            document.getElementById("table_body").innerHTML=tableData;
        })
    };


    $scope.ViewBlog =(blogId)=>{

        $http.get("http://www.localhost:8080/user/viewBlog", {params:{"blogId": blogId}}).then((data)=>{
            console.log(data);
            return data.data;
        }).then((objectData)=>{
            console.log(objectData);
            let tableData="";
            objectData.map((values)=>{
                tableData+=`<tr>
                <td>${values.blogId}</td>
                <td>${values.content}</td>
                <td>
                    <button class="btn btn-success" (click)=""> View </button>
                    <button class="btn btn-success"> View </button>
                </td>
              </tr>`;
            });
            document.getElementById("table_body").innerHTML=tableData;
        })
    };
    

});