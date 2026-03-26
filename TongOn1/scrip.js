//khởi tạo
let songs = JSON.parse(localStorage.getItem("songsData")) || [];
let editingId = null; //ktra thêm sửa

//Dom
const songTable = document.getElementById("songTable");
const titleInput = document.getElementById("title");
const artistInput = document.getElementById("artist");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const searchInput = document.getElementById("search");

//chức năng

//hiển thị
function renderSongs(data = songs){
    songTable.innerHTML = ""; //xóa dl cũ trước khi hiển thị
        
    if (data.length === 0){
        songTable.innerHTML = `<tr><td>Không có bài hát nào</td></tr>`
        return;
    }

    data.forEach((song, index) => {
        const row =`
            <tr>
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                    <button class="btn-edit" onclick="editSong(${song.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
        songTable.innerHTML += row;
    });
}

// thêm và cập nhật
function handleSubmit(){
    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    //điều kiện
    if (!title || !artist){
        alert("Vui lòng nhập đầy đủ!");
        return;
    }

    if(editingId !== null){
        //sửa
        const index = songs.findIndex(s => s.id === editingId);
        if (index !== -1){
            songs[index].title = title;
            songs[index].artist = artist;
        };

        editingId = null; ///trả về ban đầu
        formTitle.innerText = "Thêm bài hát mỡi";
        submitBtn.innerText = "Thêm";
    } else {
        //chế dộ thêm
        const newSong = {
            id: sóng.length > 0 ? sóng[songs.length - 1].id + 1 : 1, //id tự tăng
            title: title,
            artist: artist,
        }
        songs.push(newSong);
    }

    saveAndRefresh();
    resetForm();
}


//sửa trên form
function editSong(id){
    const song = songs.find(s => s.id === id);
    if(song){
        editingId = id;
        titleInput.value = song.title;
        artistInput.value = song.artist;
        
        formTitle.innerText = "Sửa bài hát";
        submitBtn.innerText = "Cập nhật";
        titleInput.focus();
    }
}

//xóa
function deleteSong(id){
    if (confirm("Bạn có chắc muốn xóa không?")){
        songs = songs.filter(s => s.id !== id);

        //reset form
        if (editingId === id) {
            resetForm();
            editingId = null;
            formTitle.innerText = "Thêm bài hát";
            submitBtn.innerText = "Thêm";
        }

        saveAndRefresh();
    }
}

//tìm kiếm
function searchSong(){
    const keywword = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(keyword)
    );
    renderSongs(filteredSongs);
}

// lưu và rs
function saveAndRefresh() {
    localStorage.setItem("songs_data", JSON.stringify(songs));
    renderSongs();
}

function resetForm() {
    titleInput.value = "";
    artistInput.value = "";
}

//start
renderSongs();