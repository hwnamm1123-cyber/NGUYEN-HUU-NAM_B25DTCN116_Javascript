let countSuccess = 0;

while (true) {
    let check = prompt("Có yêu cầu gia hạn mới không? (có/không):");

    if (check === null || check.toLowerCase().trim() === "không") {
        console.log("Hệ thống kết thúc. Tổng số lượt gia hạn thành công: " + countSuccess);
        break;
    }

    if (check.toLowerCase().trim() === "có") {
        let readerName = prompt("Tên bạn đọc:");
        let bookName = prompt("Tên sách:");

        let currentDays = parseInt(prompt("Số ngày đã mượn hiện tại:"));
        let extraDays = parseInt(prompt("Số ngày muốn gia hạn thêm:"));

        if (isNaN(currentDays) || isNaN(extraDays) || currentDays < 1 || extraDays < 1) {
            console.log("Lỗi: Số ngày nhập vào không hợp lệ!");
            continue; 
        }

        console.log(`Xử lý gia hạn: ${bookName} (Bạn đọc: ${readerName})`);

        if (currentDays + extraDays > 60) {
            console.warn("Kết quả: Không được gia hạn");
            console.log("Thông báo: Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
            
        } else if (currentDays > 45) {
            console.warn("Kết quả: Không được gia hạn");
            console.log("Thông báo: Không được gia hạn: Đã mượn quá lâu (trên 45 ngày)");
            
        } else {
            console.log("Kết quả: Gia hạn bình thường");
            console.log("Thông báo: Gia hạn thành công");
            countSuccess++;
        }
    } else {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'!");
    }
}