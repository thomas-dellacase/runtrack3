$(document).ready(()=>{
    $('#button').click(melange);
}
)
function melange() {
    let randomTable = getRandomTable();

    $('#melanges').empty();
    $('#ranges').empty();

    randomTable.forEach(i =>{
        $(`<img id='arc${i}' src='arc${i}.png'>`).appendTo("#melanges");
        $(`#arc${i}`).click(function(event) {
            toggleDiv(this);
            checkVictory();
        })
    })
}
function toggleDiv(element) {
    if(element.parentNode.id == 'melanges'){
        $(element).appendTo("#ranges");
    }
    else{
        $(element).appendTo("#melanges");
    }
}

function getRandomTable() {
    let randomTable =[];
    while(randomTable.length<6){
        let rdNumber = Math.trunc(Math.random()*7);
        if(!randomTable.includes(rdNumber) && rdNumber>0){
            randomTable.push(rdNumber);
        }
    }
    return randomTable;
}

function checkVictory(){
    let imgNodeList = document.querySelector('#ranges').childNodes;
    $('#msg').remove();
    if(imgNodeList.length == 6){
        let counter = 1;
        imgNodeList.forEach(element => {
            if(element.id.replace('arc','') == counter){
                counter++
            }
        });
        if(counter == 7){
            $('<h1 id="msg">Vous avez gagné</h1>').appendTo("body");
        } else {
            $('<h1 id="msg">Vous avez perdu</h1>').appendTo("body");
        }
    }
}

