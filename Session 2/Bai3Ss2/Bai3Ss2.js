let bookName = prompt("Nhập tên cuốn sách:");
let category = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let status = prompt("Tình trạng sách (Nhập 'sẵn' nếu còn, 'mượn' nếu đã hết):");


let normalizedCategory = category ? category.toLowerCase().trim() : "";
let normalizedStatus = status ? status.toLowerCase().trim() : "";


console.log(`--- QUẢN LÝ SÁCH ---`);
console.log(`Cuốn sách: ${bookName}`);

if (normalizedCategory === "khoa học" || normalizedCategory === "lịch sử") {
    if (normalizedStatus === "sẵn") {
        console.log("Thông báo: Sách này có sẵn trong thư viện.");
    } else {
        console.log("Thông báo: Sách đã được mượn.");
    }
} else if (normalizedCategory === "văn học" || normalizedCategory === "truyện") {
    console.log("Thông báo: Sách này có thể đọc giải trí.");
} else {
    console.log("Thông báo: Thể loại sách này chưa được phân loại.");
}