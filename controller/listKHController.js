window.listKHController = function($scope,$http){
    $scope.title1 = 'Quản lý danh sách khách hàng';
    $scope.title2 = 'Chào mừng đến với Quản lý đặt phòng';
    const apiUsers = "http://localhost:3000/listKH";

    function getAll(){
        //Call API lấy ra dữ liệu
        // $http dùng để truy cập đến phương thức để call API
        // Phương thức HTTP: GET,POST, DELETE,PUt
        $http.get(apiUsers).then(function(response) {
            console.log(response);
            console.log(response.data);
            $scope.listUser = response.data;
        });
    }


    getAll();
    //đây là hàm xóa người dùng
    $scope.deleteUser = function(id){
        let confirm = window.confirm("Bạn có muốn xóa không?");
        if(confirm){
            // nếu ấn oke thì chạy tiếp vào đây
            // call API để xóa dữ liệu
            $http.delete(
                //http://localhost:3000/usser/id
                apiUsers + '/' + id
                // `${apiUsers}/${id}`
            ).then(function (response) {
                //console.log(response);
                if(response.status == 200){
                    // nếu khác 200 là không thành công
                    alert("Bạn đã xóa thành công");
                    getAll();
                }else{
                    alert("Xóa thất bại");
                }
            });
        }
    }
}