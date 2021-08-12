function rand(){
    var a = Math.floor(Math.random()*10**9+1);
    // console.log(a)
    b = String(a).length;
    // console.log(b)
    if(b<9){
        a="0".repeat(9-b)+a;
    }
    document.getElementById('s1').innerHTML="Số: "+a
}
function edit1(){
    a=prompt("Nhập vào Họ và tên")
    document.getElementById('s2').innerHTML="Họ và tên: "+a
}
function edit2(){
    a=prompt("Nhập vào Ngày sinh");
    if(a!=parseInt(a)||a<1||a>31){
        alert("Không có ngày này")
    }
    else{
        b=prompt("Nhập vào tháng sinh");
        if(b!=parseInt(b)||b<1||b>12){
            alert("Không có tháng này")
        }
        else if(b==2&&a>29||b==4&&a==31||b==6&&a==31||b==9&&a==31||b==11&&a==31){
            alert("Không có ngày này")
        }
        else{
            c=prompt("Nhập vào năm sinh");
            if(c!=parseInt(c)||!(c%4==0)&&b==2&&a==29){
                alert("Không có ngày này")
            }
            else{
                document.getElementById('s3').innerHTML="Ngày, tháng, năm sinh: " + a +  "/" + b + "/" + c
                e=2020-Number(c);
                if(e<23){
                    d=Number(c)+25;
                    document.getElementById('expiration').innerHTML="Có giá trị đến: "+a +  "/" + b + "/" + d;
                }
                else if(e<38){
                    d=Number(c)+40;
                    document.getElementById('expiration').innerHTML="Có giá trị đến: "+a +  "/" + b + "/" + d;
                }
                else if(e<58){
                    d=Number(c)+60;
                    document.getElementById('expiration').innerHTML="Có giá trị đến: "+a +  "/" + b + "/" + d;
                }
                else{
                    document.getElementById('expiration').innerHTML="Có giá trị vô thời hạn"
                }
            }
        }
    }
}
function edit3(){
    a=prompt("Nhập vào Giới tính")
    document.getElementById('s4').innerHTML="Giới tính: "+a
}function edit4(){
    a=prompt("Nhập vào Quốc tịch")
    document.getElementById('s5').innerHTML="Quốc tịch: "+a
}function edit5(){
    a=prompt("Nhập vào Quê quán")
    document.getElementById('s6').innerHTML="Quê quán: "+a
}function edit6(){
    a=prompt("Nhập vào Nơi thường trú")
    document.getElementById('s7').innerHTML="Nơi thường trú: "+a
}
function changeHandler(events) {
    events.stopPropagation();
    events.preventDefault();
    let files = events.target.files;
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(progressEvent) {
        var url = fileReader.result;
        document.getElementById("image").src = url;
    }
    fileReader.readAsDataURL(file);
}
