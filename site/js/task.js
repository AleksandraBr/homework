function verify() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const dWidth = document.getElementById("dWidth").value;
  const dHeight = document.getElementById("dHeight").value;

  if (length <= dWidth && width <= dHeight || length <= dHeight && width <= dWidth) {
    document.getElementById("result").innerHTML = "Коробка пройдет в дверь";
    check = true;
  } else {
    document.getElementById("result").innerHTML = "Коробка не пройдет в дверь";
    check = false;
  }
}
function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else { alert("есть недостатки, повторите ввод")}
}

function verify_send(){
    verify();
    send();
}
const constVerify = document.getElementById("verify");
constVerify.onclick = verify;
const constSend = document.getElementById("send");
constSend.onclick =send;