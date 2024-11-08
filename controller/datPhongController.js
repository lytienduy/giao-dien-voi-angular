window.datPhongController= function($scope,$http,$location){
    $scope.title = 'Đặt Phòng Khách Sạn';

    const apiUsers = "http://localhost:3000/listKH";

    //Xử lý thêm dữ liệu


    $scope.creatUser = function(){
      let flag =true;
      // nếu biến flag = true thì không có lỗi j

      //tạo 1 biến để bật tắt lỗi
      //nếu là flase thì sẽ không hiển thị lỗi
      $scope.kiemtra = {
          name: false,
          dateCheckIn: false,
          dateCheckOut: false,
          sdt: false,
          email: false,
          cccd: false,
          loaiPhong: false,
          soluongkhach: false,
         
      }

      if(!$scope.userInput || !$scope.userInput.name){
          flag=false;
          //nếu có lỗi thì bật lỗi lên
          $scope.kiemtra.name = true;
      }
      if(!$scope.userInput || !$scope.userInput.dateCheckIn){
          flag=false;
          $scope.kiemtra.dateCheckIn = true;
      }
      if(!$scope.userInput || !$scope.userInput.dateCheckOut){
          flag=false;
          $scope.kiemtra.dateCheckOut = true;
      }
      if(!$scope.userInput || !$scope.userInput.sdt){
          flag=false;
          $scope.kiemtra.sdt = true;
      }
      if(!$scope.userInput || !$scope.userInput.email){
        flag=false;
        $scope.kiemtra.email = true;
    }
    if(!$scope.userInput || !$scope.userInput.cccd){
        flag=false;
        $scope.kiemtra.cccd = true;
    }
    if(!$scope.userInput || !$scope.userInput.loaiPhong){
        flag=false;
        $scope.kiemtra.loaiPhong = true;
    }
    if(!$scope.userInput || !$scope.userInput.soluongkhach){
        flag=false;
        $scope.kiemtra.soluongkhach = true;
    }

      //kiểm tra email có nhập đúng định dạng hay không
      let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let checkEmail = regexEmail.test($scope.userInput.email);
      //Nếu email nhập sai định dạng thì trả về false 
      // ngược lại nếu đúng định dạng thì trả về true
      if(!checkEmail){
          flag=false;
          $scope.kiemtra.email = true;
      }

      //Kiểm tra sđt có nhập đúng định dạng hay không
      let regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      let checkPhone = regexPhoneNumber.test($scope.userInput.sdt);
      if(!checkPhone){
          flag=false;
          $scope.kiemtra.sdt = true;
      }


      if(flag){
          //Lấy dữ liệu từ form nhập
          let newUser = {
              
            email: $scope.userInput.email, 
            sdt: $scope.userInput.sdt,
            name: $scope.userInput.name,
            dateCheckIn: $scope.userInput.dateCheckIn,
            dateCheckOut: $scope.userInput.dateCheckOut,
            cccd: $scope.userInput.cccd,
            loaiPhong: $scope.userInput.loaiPhong,
            soluongkhach: $scope.userInput.soluongkhach
          };

          //them dữ liệu
          $http.post(
              apiUsers, //đây là link api
              newUser // dữ liệu cần thêm
          ).then(function(response){
              if(response.status == 201){
                
                  alert("Bạn đã thêm thành công");
                  $location.path('/dsKH')
              }
          });
      }
      
  }
}