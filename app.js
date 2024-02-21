var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)


var tabItem = $$('.tab-item')
var tabPane = $$('.tab-pane')

var itemActive = $('.tab-item.active')
var line = $('.tab-line')

line.style.left = itemActive.offsetLeft + 'px'
line.style.width = itemActive.offsetWidth + 'px'

tabItem.forEach(function(tab, index) {
    
    tab.onclick = function() {
        pane = tabPane[index]
        
        $('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        $('.tab-pane.active').classList.remove('active')
        pane.classList.add('active')
    }
})



















































































// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const tabItem = $$('.tab-item')
// const tabPane = $$('.tab-pane')

// const tabActive = $('.tab-item.active')
// const line = $('.tab-line')

// line.style.left = tabActive.offsetLeft + 'px'
// line.style.width = tabActive.offsetWidth + 'px'

// tabItem.forEach((tab, index) => {
//     const pane = tabPane[index]
    
    
//     tab.onclick = function(e) {
//         $('.tab-item.active').classList.remove('active')
//         this.classList.add('active')

//         line.style.left = this.offsetLeft + 'px'
//         line.style.width = this.offsetWidth + 'px'

//         $('.tab-pane.active').classList.remove('active')
//         pane.classList.add('active')
//     }
// })
