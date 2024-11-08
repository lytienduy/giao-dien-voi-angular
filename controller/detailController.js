window.detailController = function($scope,$http,$routeParams){
    $scope.title = 'Chi tiết khách hàng';

    const apiUsers = "http://localhost:3000/listKH";

    //lấy ra id của người dùng
    let id = $routeParams.id;

    //call API để lấy ra chi tiết dữ liệu
    $http.get(apiUsers+'/'+id).then(function(response){
        if(response.status == 200){
            $scope.userInput=  {
                dateCheckIn: new Date(response.data.dateCheckIn),
                dateCheckOut: new Date(response.data.dateCheckOut) ,
                loaiPhong: response.data.loaiPhong,
                soluongkhach: response.data.soluongkhach,
                name: response.data.name,
                cccd: response.data.cccd,
                email: response.data.email,
                sdt: response.data.sdt,
                id: response.data.id
            }
        }
    });
}