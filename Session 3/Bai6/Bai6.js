let totalFeedback = 0;
let severeComplaint = 0; 
let mediumComplaint = 0; 
let lightComplaint = 0;  
let suggestions = 0;     
let positiveFeedback = 0;

while (true) {
    let tiepTuc = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không?:");

    if (tiepTuc === null || tiepTuc.toLowerCase().trim() === "không") {
        break;
    }

    if (tiepTuc.toLowerCase().trim() === "có") {
        let readerName = prompt("Nhập tên bạn đọc:");
        if (!readerName || readerName.trim() === "") {
            alert("Lỗi: Tên bạn đọc không được để trống!");
            continue; 
        }

        let cardId = prompt("Nhập mã thẻ bạn đọc (nếu có):");
        let type = parseInt(prompt("Loại phản hồi (1: Khiếu nại, 2: Đề xuất, 3: Khen ngợi):"));
        let content = prompt("Nội dung ngắn gọn:");

        totalFeedback++;
        console.log(`Xử lý phản hồi từ: ${readerName} (Thẻ: ${cardId || "N/A"})`);

        if (type === 1) {
            let severity = parseInt(prompt("Mức độ nghiêm trọng (1: Nhẹ, 2: Trung bình, 3: Nghiêm trọng):"));

            if (severity === 3) {
                severeComplaint++;
                console.error("Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            } else if (severity === 2) {
                mediumComplaint++;
                console.warn("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            } else if (severity === 1) {
                lightComplaint++;
                console.log("Xử lý ngay tại quầy - Khiếu nại nhẹ");
            } else {
                console.log("Khiếu nại không xác định mức độ. Ghi nhận chờ kiểm tra.");
            }

        } else if (type === 2) {
            suggestions++;
            console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");

        } else if (type === 3) {
            positiveFeedback++;
            console.log("→ Cảm ơn bạn đã phản hồi tích cực!");

        } else {
            alert("Lỗi: Loại phản hồi không hợp lệ!");
            totalFeedback--; 
        }

    } else {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'!");
    }
}

console.log(`
BÁO CÁO TỔNG KẾT CA PHẢN HỒI
Tổng số phản hồi/khiếu nại đã xử lý: ${totalFeedback}

 [CHI TIẾT KHIẾU NẠI]
 Khiếu nại Nghiêm trọng (Mức 3):    ${severeComplaint}
 Khiếu nại Trung bình (Mức 2):      ${mediumComplaint}
 Khiếu nại Nhẹ (Mức 1):             ${lightComplaint}

 [CHI TIẾT KHÁC]
 Số đề xuất cải thiện:              ${suggestions}
 Số phản hồi tích cực:              ${positiveFeedback}
`);