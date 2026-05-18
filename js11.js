const inputbtn=document.getElementById("input-btn")
let myLeads=[]
//when `[]`myLeads=JSON.parse(myLeads)
//myLeads.push("www.google.com")
//myLeads=JSON.stringify(myLeads)
//typeof MyLeads=string
const tabbtn=document.getElementById("tab-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("listel")
const deletebtn=document.getElementById("delete-btn")
//localStorage.setItem("myLeads","www.examplelead.com")
//let name=localStorage.getItem("myLeads")
//console.log(name)
//localStorage.clear()
//const tabs=[
    //{url:"www.google.com"}
//]
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    })
   
})
function render(leads){
    let listItems = ""
    for (let i= 0; i < leads.length; i++) {
// listItems += "<li><a target="blank" href="myLeads[1]*> myLeads [1] + "</a
        listItems +=`
            <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
            </li>`
}
ulEl.innerHTML = listItems
}
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value=""
   
})


    //for(let i=0;i<myLeads.length;i++){
    //ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
       // listItems+="<li>"+myLeads[i]+"</li>"

//}
   

//function renderLeads(){
//let listItems=""
//for(let i=0;i<myLeads.length;i++){
   //listItems+=`<li><a target='_blank" href='${myLeads[i]}'>myLeads[i]</a>`
//}
//ulEl.innerHTML=listItems
//}

//const li=document.createElement("li")
//li.textConetnt=myLeads[i]
//ulEl.append(li)

