const node_for_click = document.getElementById("for_click")

function find_edit(){

    document.getElementsByTagName('body')[0].childNodes[8].innerText='Burlutskaya'
    document.getElementsByTagName('body')[0].childNodes[6].innerText='Aleksandra'
    document.getElementsByTagName('body')[0].childNodes[20].innerText='XIX.VII.IIIV'
}

node_for_click.addEventListener("click",find_edit)