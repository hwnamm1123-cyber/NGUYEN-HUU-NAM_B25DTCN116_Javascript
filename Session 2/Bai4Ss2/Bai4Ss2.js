let bookName = prompt("Nhập tên cuốn sách bạn muốn mượn:");
let borrowerName = prompt("Nhập tên người mượn:");
let favoriteLevelInput = prompt("Nhập mức độ yêu thích của bạn (từ 1 đến 5):");

let favoriteLevel = parseInt(favoriteLevelInput);

console.log(`QUẢN LÝ MỨC ĐỘ YÊU THÍCH`);
console.log(`Người mượn: ${borrowerName}`);
console.log(`Cuốn sách: ${bookName}`);

if (favoriteLevel === 5 || favoriteLevel === 4) {
    console.log("Thông báo: Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (favoriteLevel === 3) {
    console.log("Thông báo: Sách này khá ổn, có thể mượn.");
} else if (favoriteLevel === 2 || favoriteLevel === 1) {
    console.log("Thông báo: Sách này bạn có thể cân nhắc mượn lại sau.");
} else {
    console.log("Thông báo: Mức độ yêu thích không hợp lệ. Vui lòng nhập từ 1 đến 5.");
}