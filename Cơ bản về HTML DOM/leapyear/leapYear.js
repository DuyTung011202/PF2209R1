let inputYear = prompt("Nhập năm: ")



if(inputYear % 4 ==0 && inputYear % 100 != 0 || inputYear % 400 ==0) {
    alert(inputYear + " is leap year")
}
else {
    alert(inputYear + " is not leap year")
}