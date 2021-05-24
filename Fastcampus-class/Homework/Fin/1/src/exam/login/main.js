// 코드 구현
const login_id = document.getElementById('input__id');
const login_pw = document.getElementById('input__pw');
const class_login = document.getElementById('log_btn');
const warning_word = document.getElementById('warning');

login_pw.addEventListener('keyup', function(){
    var check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(login_pw.value);
    if( check && login_id.value !== ""){
        activate_LoginBtn();
    }
    else {
        deActivate_LoginBtn();
    }
});

function activate_LoginBtn(){
    class_login.style.color = "black";        
    class_login.style.backgroundColor = "greenyellow";
    class_login.style.cursor = "pointer";
    warning_word.style.textIndent = "-9999px";
    class_login.addEventListener('click', open_arlert);  
}

function deActivate_LoginBtn(){
    class_login.style.color = "rgb(82, 81, 81)";
    class_login.style.backgroundColor = "gray";
    class_login.style.cursor = "default";
    warning_word.style.textIndent = "0";   
}

function open_arlert(){
    msg = login_id.value+"님 어서오세요";
    console.log(msg);
    alert(msg);
}

// function open_alert() {
//     const element_id = document.getElementById('input__id').value;
//     const element_pw = document.getElementById('input__pw').value;
//     const class_login = document.getElementById('log_btn');
//     console.log(element_id.length, element_pw.length);
//     if (element_id.length>1 && (element_pw.length>7 && element_pw.length<21)){
//         msg = element_id+"님 어서오세요";
//         alert(msg);
//     }
// }