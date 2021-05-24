// 코드 구현
const login_id = document.getElementById('input__id');
const login_pw = document.getElementById('input__pw');
const class_login = document.getElementById('log_btn');

login_pw.addEventListener('keyup', function(){
    var check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(login_pw.value);
    if( check && login_id.value !== ""){
        class_login.style.color = "black";        
        class_login.style.backgroundColor = "greenyellow";
        class_login.style.cursor = "pointer";
    }
    else {
        class_login.style.color = "rgb(82, 81, 81)";
        class_login.style.backgroundColor = "gray";
        class_login.style.cursor = "default";
    }
});

function open_alert() {
    const element_id = document.getElementById('input__id').value;
    const element_pw = document.getElementById('input__pw').value;
    const class_login = document.getElementById('log_btn');
    console.log(element_id.length, element_pw.length);
    if (element_id.length>1 && (element_pw.length>7 && element_pw.length<21)){
        msg = element_id+"님 어서오세요";
        alert(msg);
    }
}