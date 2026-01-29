let quantityInput = prompt("Nhập số lượng sách hiện có trong thư viện:");

let bookQuantity = parseInt(quantityInput); //Chuyển sang số nguyên

if (isNaN(bookQuantity)) {
    console.log("Vui lòng nhập một số hợp lệ!");
} else if (bookQuantity < 10) {
    console.log("Thư viện có ít sách");
} else if (bookQuantity >= 10 && bookQuantity <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}