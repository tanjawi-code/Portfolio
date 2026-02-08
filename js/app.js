// When a target enters a screen, the callback runs, and when it leaves the screen, the callback runs again.
const divs = document.querySelectorAll('section div')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
        else {
            entry.target.classList.remove('show')
        }
    })
}, 
{
    rootMargin: "0px 0px -100px 400px"
})

divs.forEach((div) => observer.observe(div))

// Observer for goals section.
const div_goals = document.querySelectorAll('.goals div')
const observeGoalsSection = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('rotate')
        } 
        else {
            entry.target.classList.remove('rotate')
        }
    })
}, {})

div_goals.forEach((div_goal) => observeGoalsSection.observe(div_goal))

// Show side bar
function showSide() {
    const notSideMenuBar = document.querySelector('.sidebarNavchoices')
    notSideMenuBar.style.display = 'flex';
}

// Close side bar
function closeSide() {
    const sideMenuBar = document.querySelector('.sidebarNavchoices')
    sideMenuBar.style.display = 'none';
}