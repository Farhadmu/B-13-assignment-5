
// login check
if(localStorage.getItem("login") !== "true"){
window.location.href = "login.html"
}

const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

let issues = []

// load issues
async function loadIssues(){

const res = await fetch(API)
const data = await res.json()

issues = data.data

showIssues(issues)
showCount()

}

loadIssues()


// show total + open + closed count
function showCount(){

document.getElementById("issueCount").innerText = issues.length

const open = issues.filter(i=>i.status==="open").length
const closed = issues.filter(i=>i.status==="closed").length

document.getElementById("openCount").innerText = open
document.getElementById("closedCount").innerText = closed

}


// filter issues
function filterIssues(status,btn){

document.querySelectorAll(".tab").forEach(tab=>{
tab.classList.remove("active")
})

btn.classList.add("active")

let filtered = issues

if(status==="open"){
filtered = issues.filter(i=>i.status==="open")
}

if(status==="closed"){
filtered = issues.filter(i=>i.status==="closed")
}

showIssues(filtered)

// change issue count
document.getElementById("issueCount").innerText = filtered.length

}


// show issues
function showIssues(data){

const container = document.getElementById("issues")

container.innerHTML=""

data.forEach(issue=>{

const card=document.createElement("div")

card.classList.add("card")

if(issue.status==="open"){
card.classList.add("open-card")
}else{
card.classList.add("closed-card")
}

card.onclick = () => openIssue(issue.id)

card.innerHTML = `

<div class="status-icon">
<img src="assets/${issue.status.toLowerCase() === "open" ? "Open-Status.png" : "Closed-Status.png"}" width="18">
</div>

<span class="priority ${issue.priority}">
${issue.priority}
</span>

<h4>${issue.title}</h4>

<p>${issue.description}</p>

<div class="labels">

${issue.labels.map(l=>{

let cls=""

if(l.toLowerCase()=="bug") cls="bug"
if(l.toLowerCase()=="help wanted") cls="help"
if(l.toLowerCase()=="enhancement") cls="enhancement"

return `<span class="label ${cls}">${l.toUpperCase()}</span>`

}).join("")}

</div>

<div class="card-footer">

#${issue.id} by ${issue.author}

<br>

${new Date(issue.createdAt).toLocaleDateString()}

</div>

`



container.appendChild(card)

})

}


async function openIssue(id){

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
)

const data = await res.json()

const issue = data.data

const modal = document.getElementById("modal")

modal.innerHTML = `

<div class="modal-content issue-modal">

<h2>${issue.title}</h2>

<div class="issue-meta">

<span class="status-badge ${issue.status.toLowerCase()}">
${issue.status.toUpperCase()}
</span>

<span class="meta-text">
Opened by <b>${issue.author}</b> • 
${new Date(issue.createdAt).toLocaleDateString()}
</span>

</div>

<div class="labels">

${issue.labels.map(l=>{

let cls=""

if(l.toLowerCase()=="bug") cls="bug"
if(l.toLowerCase()=="help wanted") cls="help"
if(l.toLowerCase()=="enhancement") cls="enhancement"

return `<span class="label ${cls}">${l}</span>`

}).join("")}

</div>

<p class="issue-desc">
${issue.description}
</p>

<div class="issue-info">

<div>
<p class="info-title">Assignee:</p>
<p><b>${issue.author}</b></p>
</div>

<div>
<p class="info-title">Priority:</p>
<span class="priority-badge ${issue.priority}">
${issue.priority.toUpperCase()}
</span>
</div>

</div>

<div class="modal-footer">

<button class="close-btn" onclick="closeModal()">
Close
</button>

</div>

</div>

`

modal.style.display="flex"

}


// close modal
function closeModal(){

document.getElementById("modal").style.display="none"

}


// search issue
async function searchIssue(){

const text = document.getElementById("search").value

if(text===""){
showIssues(issues)
showCount()
return
}

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
)

const data = await res.json()

showIssues(data.data)

/* add this line */
document.getElementById("issueCount").innerText = data.data.length

}
function setActive(btn){

document.querySelectorAll(".tabs button")
.forEach(b=>b.classList.remove("active"))

btn.classList.add("active")

}