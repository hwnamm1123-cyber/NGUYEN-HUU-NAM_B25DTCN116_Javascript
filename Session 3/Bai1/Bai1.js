let total = parseInt(prompt("Hôm nay mượn bao nhiêu sách?"));

if (isNaN(total) || total <=0){
    console.log("Số lượt mượn không hợp lệ!");
} else {
    let success=0;

    for (let i = 1; 1 <=total; i++){
        console.log(`Lượt mượn thứ ${i}`);
        let name = prompt(`Nhập tên người mượn sách`);
        let bookName = prompt(`Nhập tên sách mượn thứ ${i}`);
        let days = parseInt(prompt(`Nhập số ngày mượn sách "${bookName}"`));

        if (days > 14){
            console.log(`Người mượn: ${name}`);
            console.log(`Cảnh báo: Số ngày mượn sách vượt quy định`);
        } else {
            console.log(`Người mượn: ${name}`);
            console.log(`Tình trạng: Mượn thành công`);
        }
    }
    
    console.log("THỐNG KÊ");
    console.log(`Tổng số lượt mượn yêu cầu: ${total}`);
    console.log(`Số lượt mượn thành công: ${success}`);
}