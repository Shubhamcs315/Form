// console.log("hi");
let d = 0;
function func(d) {
    console.log(d);
    let rt = document.getElementById(`${d}`);
    let yu=document.getElementById(`${d}`).children[1];
    let yt=yu.textContent;
    localStorage.removeItem(yt);
    rt.replaceWith('');
}
class Library {
    constructor(name, author, type,web,img1,skill) {
        this.name = name;
        this.author = author;
        this.typ = type;
        this.web=web;
        this.img1=img1;
        this.skill=skill;
    }
    addRow() {
        let gu = document.getElementById("k222");
        let m=`${this.img1}`;
        gu.innerHTML += `
        <div class="l">
                    <img src=${m} alt="error" style="height: 150px;width: 127px;margin-top: 10px;margin-left: 5px;">
                    <div class="ine">
                        <p>${this.name}</p>
                        <p>${this.author}</p>
                        <a>${this.web}</a>
                        <p>${this.typ}</p>
                        <div class="jo">
                            <p class="vr">${this.skill}</p>
                        </div>
                    </div>
                </div>`;
        d = d + 1;
    }
    clear() {
        // console.log("hi");
        let a = document.getElementById("form");
        a.reset();
    }
    validate() {
        if (this.name.length < 2 || this.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    alerti(type,displayMessage,m){
        let message = document.getElementById('message');
   if(m){
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert"style="background-color: rgb(131, 207, 17);height: 30px;font-weight: bolder; color: white; text-align: center;">
    <strong>Messge:</strong> ${displayMessage}
</div>`;
   }
   else{
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert"style="background-color:red;height: 30px; font-weight: bolder;color: white; text-align: center;">
    <strong>Messge:</strong> ${displayMessage}
</div>`;
   }
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

    }
    storage(){
        let arr=[this.author,this.type];
        localStorage.setItem(this.name,JSON.stringify(arr));
    }
}
let a = document.getElementById("form");
console.log(a);
a.addEventListener("submit", function (e) {
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let type;
    let skill;
    let img1=document.getElementById("author1").value;
    let web= document.getElementById("name1").value;
    let fiction = document.getElementById('a');
    let cp = document.getElementById('b');
    // let cook = document.getElementById('c');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (cp.checked) {
        type = cp.value;
    }
    let w1=document.getElementById("w1");
    let w2=document.getElementById("w2");
    if(w1.checked){
        skill="JAVA";
    }
    else if(w2.checked){
        skill="HTML";
    }
    else if(w3.checked){
        skill="CSS";
    }
    else if(w1.checked && w2.checked){
        skill="JAVA HTML";
    }
    else if(w2.checked && w3.checked){
        skill="HTML CSS";
    }
    else if(w1.checked && w3.checked){
        skill="JAVA CSS";
    }
    else{
        skill="JAVA HTML CSS";
    }
    let harry = new Library(name, author, type,web,img1,skill);
    if (harry.validate()) {
        harry.addRow();
        harry.clear();
        harry.storage();
        e.preventDefault();
        harry.alerti("Success","Book is added",true);
    }
    else{
        console.log("book not add");
        harry.alerti("Error","Book is not added",false);
    }
    e.preventDefault();
})
let km=document.getElementById('s');

km.addEventListener("input",function(){
    let bj=km.value.toLowerCase();
    console.log(bj);
   for(let i=0;i<d;i++){
       let vi= document.getElementById(`${i}`);
       let r=vi.children[1].textContent;
       if(bj.includes(r)){
           vi.style.display="table-row";
           console.log("s");
       }
       else{
        vi.style.display="none";
        console.log("");
        let siu = document.querySelector('#k');
            siu.addEventListener('click', function (e) {
                console.log('hi');
                for(let j=0;j<d;j++){
                    let vi= document.getElementById(`${i}`);
                    vi.style.display="table-row";
                    let we = document.querySelector('#s');
                    we.value = '';
                }
            })
       }
   }

})
let vj=document.getElementById("st");
vj.addEventListener('click',function shu() {
    document.getElementById('name').value="";
    document.getElementById('author').value="";
    document.getElementById("author1").value="";
    document.getElementById("name1").value="";
    document.getElementById("vehicle1").checked = false;
    document.getElementById("vehicle2").checked = false;
    document.getElementById("vehicle3").checked = false;
    document.getElementById('a').checked=false;
    document.getElementById('b').checked=false;

})

