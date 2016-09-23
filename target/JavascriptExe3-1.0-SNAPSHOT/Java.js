$("div").first().click(function(){
   $( this ).hide();
});
$("div").slice(1,2).hover(function(){
   $( this ).css("border","solid 1px black");
});
$("div").slice(1,2).click(function (){
    $("div").slice(2,3).css("font-size","20px");
});
//opgave 2
$("div.divtest").click(function (){
    this.textContent = parseInt(this.textContent) * parseInt(this.textContent);
});
//opgave 3
$("li:odd").css("background-color","lightgray");
$("li").each(function( i, val ) {
  $( this).css("font-size",i*5);
});
//opgave 4
//opgave 5
$(".submit").click(function (){
    var bool = true;
    $("input").each(function (){
        if(this.val == undefined||this.val =="not filled")
        {
            this.value = "not filled";
            bool = false;
            //document.getElementById("lol").value = "not filled";
        }
    });
    if(bool)
        $(".submit").first().submit();
});
//opgave 6
function person(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
var array = [new person("Arvid","Drystan",3),new person("Maitiú","Azaria",4)];
tableCreate(array);
function tableCreate(array) {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement('tr');
        
        for (var j = 0; j < 3; j++) {
            if (i == 2 && j == 1) {
                break
            } else {
                var td = document.createElement('td');
                td.addEventListener("mouseover",boldanditalic);
                td.appendChild(document.createTextNode('\u0020'));
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                if(j == 0){
                    td.textContent = array[i].firstname;
                }
                else if(j ==1){
                    td.textContent = array[i].lastname;
                }
                else if(j==2){
                    td.textContent = array[i].age;
                }
                tr.appendChild(td);
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}
function boldanditalic(){
   
    $(this).css("font","italic bold");
}
