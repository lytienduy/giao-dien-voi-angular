window.homeController= function($scope){
    $scope.title = 'Chào mừng đến với Quản lý đặt phòng';
// detail, listKH, edit = 200
// add 201
    $scope.listKH = [
        {
            name: 'Lý Tiến Duy',
            dateCheckIn: new Date("2024/05/24"),
            dateCheckOut: new Date("2024/05/28"),
            loaiPhong: 'Cao cấp'
        },
        {
            name: 'Lý Tiến Khôi',
            dateCheckIn: new Date("2024/05/24"),
            dateCheckOut: new Date("2024/05/28"),
            loaiPhong: 'Tiêu chuẩn'
        },
        {
            name: 'Lý Văn Khoa',
            dateCheckIn: new Date("2024/05/24"),
            dateCheckOut: new Date("2024/05/28"),
            loaiPhong: 'Cao cấp'
        },
        {
            name: 'Tạ Thị Hoa',
            dateCheckIn: new Date("2024/05/24"),
            dateCheckOut: new Date("2024/05/28"),
            loaiPhong: 'Cao cấp'
        },
        {
            name: 'Lý Tố Trân',
            dateCheckIn: new Date("2024/05/24"),
            dateCheckOut: new Date("2024/05/28"),
            loaiPhong: 'Tiêu chuẩn'
        }
    ]
}