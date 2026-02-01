let totalRequests = 0;     
let successRequests = 0;    
let rejectedRequests = 0;  
let pendingRequests = 0;    

while (true) {
    let tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không):");

    if (tiepTuc === null || tiepTuc.toLowerCase().trim() === "không") {
        break;
    }

    if (tiepTuc.toLowerCase().trim() === "có") {
        let readerName = prompt("Nhập tên bạn đọc:");
        let bookId = prompt("Nhập Mã sách:");
        let bookName = prompt("Nhập Tên sách (tham khảo):");
        let waitDays = parseInt(prompt("Số ngày dự kiến chờ (số nguyên ≥ 1):"));
        let priority = parseInt(prompt("Mức độ ưu tiên (1: SV, 2: Giảng viên, 3: Đặc cách):"));

        if (isNaN(waitDays) || isNaN(priority) || waitDays < 1) {
            alert("Lỗi: Dữ liệu nhập vào không hợp lệ. Vui lòng thử lại!");
            continue; 
        }

        totalRequests++; 
        console.log(`Xử lý yêu cầu: [${bookId}] - ${bookName} (Người mượn: ${readerName})`);

        if (waitDays > 45) {
            rejectedRequests++;
            console.error("Từ chối: Thời gian chờ quá lâu (>45 ngày)");

        } else if (priority === 3) {
            successRequests++;
            console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");

        } else if (priority === 2 && waitDays <= 30) {
            successRequests++;
            console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");

        } else if (priority === 1 && waitDays <= 21) {
            successRequests++;
            console.log("Đặt trước thành công");

        } else {
            pendingRequests++;
            console.warn("Đặt trước tạm thời - Chờ xét duyệt thêm");
        }

    } else {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'!");
    }
}

console.log(`
BÁO CÁO TỔNG KẾT CA
Tổng số yêu cầu đã xử lý:       ${totalRequests}
Số yêu cầu thành công:          ${successRequests}
Số yêu cầu bị từ chối:          ${rejectedRequests}
Số yêu cầu chờ xét duyệt thêm:  ${pendingRequests}
`);