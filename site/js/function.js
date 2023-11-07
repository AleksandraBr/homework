const node_for_click = document.getElementById("for_click")

function find_edit(){

    document.getElementsByTagName('body')[0].childNodes[5].innerText='Burlutskaya'
    document.getElementsByTagName('body')[0].childNodes[3].innerText='Aleksandra'
    document.getElementsByTagName('body')[0].childNodes[17].innerText='XIX.VII.IIIV'
}

node_for_click.addEventListener("click",find_edit)