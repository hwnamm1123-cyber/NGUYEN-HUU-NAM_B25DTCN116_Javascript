let bookName = prompt("Nhập tên cuốn sách:");
let status = prompt("Trạng thái sách (nhập 'có sẵn' hoặc 'đã mượn'):");
let publishYear = Number(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();
let ageOfBook = currentYear - publishYear;

let normalizedStatus = status ? status.toLowerCase().trim() : "";

console.log(`QUẢN LÝ TRẠNG THÁI SÁCH`);
console.log(`Sách: ${bookName}`);


if (normalizedStatus === "có sẵn" && ageOfBook <= 5) {
    console.log("Thông báo: Sách này mới và có sẵn để mượn.");

} else if (normalizedStatus === "đã mượn" && ageOfBook <= 10) {
    console.log("Thông báo: Sách này đã mượn nhưng khá mới, có thể mượn lại sau.");

} else if (normalizedStatus === "đã mượn" && ageOfBook > 10) {
    console.log("Thông báo: Sách này đã mượn và khá cũ.");

} else if (normalizedStatus === "có sẵn" && ageOfBook > 5) {
    console.log("Thông báo: Sách này có sẵn nhưng đã lâu năm.");

} else {
    console.log("Thông báo: Dữ liệu nhập vào không hợp lệ, vui lòng kiểm tra lại!");
}