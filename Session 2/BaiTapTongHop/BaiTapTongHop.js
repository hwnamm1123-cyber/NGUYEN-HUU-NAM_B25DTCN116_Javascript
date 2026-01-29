let userName = prompt("Nhập tên người dùng:");
let roleInput = prompt("Nhập vai trò(admin/student/guest):");
let balance = Number(prompt("Nhập số tài khoản thẻ:"));
let isCardActive = prompt("Trạng thái thẻ (nhập 'true' để hoạt động):")==="true";
let daysOverdue = Number(prompt("Số ngày quá hạn trả sách:"));

let role = roleInput ? roleInput.toLowerCase().trim() : "";

let access ="";
switch(role){
    case "admin":
        access = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        access = "Chào sinh viên, bạn có thể mượn sách";
        break; 
    case "guest":
        access = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break; 
    default:
        access = "Lỗi: Vai trò không hợp lệ!";
}

let canBorrow = false;
let reason = "";

if (!useName){
    reason = "Tên không được để trống";
} else if (role !== "admin" && role !== "student") {
    reason = "Không có quyền mượn sách";
} else if (balance <= 0) {
    reason = "Tài khoản hết tiền!";
} else if (!isCardActive) {
    reason = "Tài khoản bị khóa!";
} else {
    canBorrow = true;
}


let borrowResult = canBorrow ? "ĐƯỢC PHÉP MƯỢN SÁCH" : `YÊU CẦU BỊ TỪ CHỐI (${reason})`;


let fine = 0;
let status = "";

if (daysOverdue <= 0){
    status = "Cảm ơn bạn đã trả đúng hạn";
} else {
    status = `Quá hạn ${daysOverdue} ngày`;
    if (daysOverdue <= 5){
        fine = daysOverdue * 5000;
    } else if (daysOverdue <= 10){
        fine = daysOverdue * 10000;
    } else {
        fine = 200000;
        statusMsg += " - TÀI KHOẢN BỊ KHÓA";
    }
}

console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---
Người dùng: ${userName ? userName.toUpperCase() : "KHÔNG XÁC ĐỊNH"}
Quyền hạn: ${accessMsg}
Kết quả mượn: ${borrowResult}
Tình trạng trả sách: ${statusMsg}
Tiền phạt: ${fine.toLocaleString()} VNĐ
`);
