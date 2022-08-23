let app = angular.module('LoginApp',[]);

app.controller("LoginCtrl",($scope, $http, $window)=>{

   $http.defaults.headers.post["Content-Type"] = "application/json";

   $scope.login=(username,password)=>{

    if(username==null||password==null)
    {
        // location.reload();
        alert("Null Values!");
        console.log("Null inserted"); 
    }
    else
    {
        var data={
            username : username,
            password : password
        }
        $http.post('http://www.localhost:8080/user/Authenticate',JSON.stringify(data)).then((response)=>{
            if(response.data!=-1)
            {
                $id=response.data;
                $window.location.href = 'http://127.0.0.1:5500/user.html?id='+$id;
                console.log(response);
                alert("Logged In Successfully!");
                console.log("Success");
            }
            else
            {
                console.log(response);
                alert("Login Failed!");
                console.log("Failure");
                location.reload();
            }
            
        },(error)=>{

            alert("Login Failed!");
            console.log("Failure");
            location.reload();
        });
    };
   };



   $scope.signup=(username,password,confirm_password)=>{
    if(username==null||password==null||confirm_password==null)
    {
        // location.reload();
        alert("NULL Values!");
        console.log("Null Values"); 
    }
    else if(password!=confirm_password)
    {
        location.reload();
        alert("Password Mismatch");
        console.log("Password Mismatch"); 
    }
    else
    {
        var data={
            username : username,
            password : password
        }
        $http.post('http://www.localhost:8080/user/addUser',JSON.stringify(data)).then( function(success) {
            location.reload();
            alert("Data Submitted Successfully!");
            console.log("Success");
        },
        function (error){
            location.reload();
            alert("Username already exists");
            console.log("Failure");            
        }
    );
   };
};

});