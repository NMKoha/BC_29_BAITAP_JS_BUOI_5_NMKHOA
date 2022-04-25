/**
 * Bài tập 1
 */
var tongDiem = 0;
var diemTB = 0;
var diemUT = 0;
var diemKV = 0;
var diemDT = 0;


function getEle(id) {
    return document.getElementById(id);
}

function tong(a, b) {
    var c = a + b;
    return c;
}

function tinhTong(a, b, c) {

    var kq = (a + b + c);
    return kq;
}

function loaiKV() {
    var khuVuc = getEle("khuVuc").value;
    if (khuVuc === "A") {
        diemKV = 2;
    } else if (khuVuc === "B") {
        diemKV = 1;
    } else if (khuVuc === "C") {
        diemKV = 0.5;
    } else if (khuVuc === "X") {
        diemKV = 0;
    } else {
        alert("Vui lòng nhập đúng khu vực!");
    }
    return diemKV;
}

function loaiDT() {
    var doiTuong = getEle("doiTuong").value * 1;
    if (doiTuong === 1) {
        diemDT = 2.5;
    } else if (doiTuong === 2) {
        diemDT = 1.5;
    } else if (doiTuong === 3) {
        diemDT = 1;
    } else if (doiTuong === 0) {
        diemDT = 0;
    } else {
        alert("Vui lòng nhập đúng đối tượng!");
    }
    return diemDT;
}

getEle("btnTinh").onclick = function() {
    var diemChuan = getEle("diemChuan").value * 1;
    var a = getEle("mon1").value * 1;
    var b = getEle("mon2").value * 1;
    var c = getEle("mon3").value * 1;
    var xepLoai = "";
    var khuVuc = loaiKV();
    var doiTuong = loaiDT();
    tongDiem = tong(khuVuc, doiTuong) + tinhTong(a, b, c);
    if (a === 0 || b === 0 || c === 0 || tongDiem < diemChuan) {
        xepLoai += "Thí sinh rớt!";
    } else {
        xepLoai += "Chúc mừng, thí sinh đã đậu!";
    }

    getEle("divInfo").innerHTML = "Tổng điểm của thí sinh: " + tongDiem + " ." + xepLoai;

}



/**
 * Bài tập 2
 */
const tien50KWDau = 500;
const tien50KWKe = 650;
const tien100KWKe = 850;
const tien150KWKe = 1100;
const tien50KWConLai = 1300;

function tinhTienDien(soKW) {
    var tienDien = 0;
    if (0 < soKW && soKW <= 50) {
        tienDien = soKW * tien50KWDau;
    } else if (50 < soKW && soKW <= 100) {
        tienDien = 50 * tien50KWDau + (soKW - 50) * tien50KWKe;
    } else if (100 < soKW && soKW <= 200) {
        tienDien = 50 * tien50KWDau + 50 * tien50KWKe + (soKW - 100) * tien100KWKe;
    } else if (200 < soKW && soKW <= 350) {
        tienDien = 50 * tien50KWDau + 50 * tien50KWKe + 100 * tien100KWKe + (soKW - 200) * tien150KWKe;
    } else if (soKW > 350) {
        tienDien = 50 * tien50KWDau + 50 * tien50KWKe + 100 * tien100KWKe + 150 * tien150KWKe + (soKW - 350) * 1300;
    } else {
        alert("Vui lòng nhập số KW!")
    }
    return tienDien;
}
getEle("btnTinhTienDien").onclick = function() {
    var ten = getEle("ten").value;
    var soKW = getEle("soKW").value * 1;
    var tienDien = tinhTienDien(soKW);
    var currentFormat = new Intl.NumberFormat("vn-Vn");

    getEle("divInfo1").style.display = "block";
    getEle("divInfo1").innerHTML = "Số tiền điện của hộ gia đình: " + ten + " là: " + currentFormat.format(tienDien);
}