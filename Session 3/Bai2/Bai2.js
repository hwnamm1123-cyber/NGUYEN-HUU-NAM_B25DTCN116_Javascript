let totalReturns = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách"));

if (isNaN(totalReturns) || totalReturns <= 0){
    console.log ("Số lượt trả không hợp lệ!");
} else {
    let lateCount = 0;

    for (let i = 1; i <= totalReturns; i++){
        console.log (`Lượt trả thứ ${i}`);

        let name = prompt(`Nhập tên người trả thứ ${i}:`);
        let bookName = prompt(`Nhập tên sách trả thứ ${i}:`);
        
        while (true){
            let actualDay = parseInt(prompt(`Nhập số ngày mượt thực tế của cuốn"${bookName}":`));

            if (!isNaN(actualDay) && actualDay >= 1){
                break;
            }
            console.log("Lỗi: Số ngày mượn phải là số nguyên lớn hơn hoặc bằng 1");
        }
    }
    console.log(`Người trả: ${name}`);
    console.log(`Số ngày mượn: ${actualDay}`);

    if (actualDay <= 14) {
        console.log("Tình trạng: Trả đúng hạn");
    } else if (actualDay <= 21) {
        console.log("Tình trạng: Trả muộn nhẹ");
        lateCount++;
    } else {
        console.log("Tình trạng: Quá hạn nghiêm trọng");
        lateCount++; 
    }

    console.log(`
    THỐNG KÊ TRẢ SÁCH
    Tổng số lượt trả sách: ${totalReturns}
    Số lượt trả muộn (≥ 15 ngày): ${lateCount}
    `);
}