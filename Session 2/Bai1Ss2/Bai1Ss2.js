let bookName = prompt("Nhập tên cuốn sách:");
let author = prompt("Nhập tên tác giả:");
let publishYearInput = prompt("Nhập năm xuất bản:");

let publishYear = Number(publishYearInput);

let currentYear = new Date().getFullYear();

console.log(`--- Thông tin sách ---`);
console.log(`Tên sách: ${bookName}`);
console.log(`Tác giả: ${author}`);
console.log(`Năm xuất bản: ${publishYear}`);

if (publishYear === currentYear) {
    console.log("Thông báo: Đây là sách mới!");
} else if (currentYear - publishYear <= 5 && currentYear - publishYear > 0) {
    console.log("Thông báo: Sách khá mới");
} else {
    console.log("Thông báo: Sách đã cũ");
}