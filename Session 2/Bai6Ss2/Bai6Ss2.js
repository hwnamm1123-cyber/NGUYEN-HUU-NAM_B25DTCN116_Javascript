let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let status = prompt("Tình trạng sách (có sẵn, đã mượn, không có sẵn):");
let hasCard = prompt("Bạn có thẻ thư viện không? (nhập 'có' hoặc 'không'):");
let borrowDays = Number(prompt("Số ngày mượn (nếu đang mượn):"));

let normalizedStatus = status ? status.toLowerCase().trim() : "";
let normalizedCard = hasCard ? hasCard.toLowerCase().trim() : "";

console.log(`--- QUẢN LÝ MƯỢN SÁCH ---`);

if (normalizedStatus === "có sẵn") {
    if (normalizedCard === "có") {
        console.log("Chúc mừng, bạn có thể mượn sách này.");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
    }

} else if (normalizedStatus === "đã mượn") {
    if (borrowDays < 30) {
        if (normalizedCard === "có") {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại.");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
        }
    } else {
        console.log("Sách đã quá hạn trả, vui lòng liên hệ thủ thư.");
    }

} else if (normalizedStatus === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau.");

} else {
    console.log("Lỗi: Thông tin không hợp lệ, vui lòng nhập lại.");
}