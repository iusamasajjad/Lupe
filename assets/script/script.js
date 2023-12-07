var panels = document.querySelectorAll("#navigation > .nav")
panels.forEach(each=>{
    each.onclick = function(){
        panels.forEach(ss=>ss.classList.remove("active")) // removing active from all
        each.classList.add("active") // assigning active to selected
    }
})

// formating section
var formate = document.querySelectorAll("#formatSection > .format")
formate.forEach(each=>{
    each.onclick = function(){
        formate.forEach(ss=>ss.classList.remove("sectionActive")) // removing active from all
        each.classList.add("sectionActive") // assigning active to selected
    }
})
