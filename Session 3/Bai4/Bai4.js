let totalBooks = 0;      
let lostBooks = 0;       
let outOfStockBooks = 0; 
let highStockBooks = 0;  
let normalStockBooks = 0;

while (true) {
    let action = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không):");

    if (action === null || action.toLowerCase().trim() === "không") {
        break; 
    }

    if (action.toLowerCase().trim() === "có") {
        let bookId = prompt("Nhập Mã sách (không được để trống):");

        if (!bookId || bookId.trim() === "") {
            alert("Lỗi: Mã sách không được để trống. Vui lòng nhập lại lượt này.");
            continue;
        }

        let bookName = prompt("Nhập Tên sách:");
        let quantity = parseInt(prompt(`Nhập số lượng thực tế của cuốn "${bookName}":`));
        let status = parseInt(prompt("Tình trạng sách (1-Bình thường, 2-Mất):"));

        if (isNaN(quantity) || quantity < 0 || (status !== 1 && status !== 2)) {
            alert("Dữ liệu nhập vào không hợp lệ!");
            continue;
        }

        totalBooks++; 
        if (status === 2) {
            console.log(`Sách [${bookId}]: Phân loại - Sách mất`);
            lostBooks++;
        } else if (status === 1 && quantity === 0) {
            console.log(`Sách [${bookId}]: Phân loại - Sách hết hàng`);
            outOfStockBooks++;
        } else if (status === 1 && quantity >= 10) {
            console.log(`Sách [${bookId}]: Phân loại - Sách tồn kho nhiều`);
            highStockBooks++;
        } else if (status === 1 && quantity >= 1 && quantity <= 9) {
            console.log(`Sách [${bookId}]: Phân loại - Sách tồn kho bình thường`);
            normalStockBooks++;
        }

    } else {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'!");
    }
}

console.log(`
BÁO CÁO KIỂM KÊ KHO
Tổng số sách đã kiểm kê: ${totalBooks} cuốn
Số sách mất:             ${lostBooks} cuốn
Số sách hết hàng:        ${outOfStockBooks} cuốn
Số sách tồn nhiều:       ${highStockBooks} cuốn
Số sách tồn bình thường: ${normalStockBooks} cuốn
`);