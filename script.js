<script>

function init(){
    
const eles = document.querySelectorAll('.card-post > .elementor-widget-container')

if(eles.length == 0 ) return

eles.forEach((ele) => {

ele.parentElement.style = '--article:' + ele.querySelectorAll('article').length


ele.style.cursor = 'grab'

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseDownHandler = function (e) {
    ele.style.cursor = 'grabbing'
    ele.style.userSelect = 'none'

    pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
}

const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y

    ele.scrollTop = pos.top - dy
    ele.scrollLeft = pos.left - dx
};

const mouseUpHandler = function () {
    ele.style.cursor = 'grab'
    ele.style.removeProperty('user-select')

    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
}

ele.addEventListener('mousedown', mouseDownHandler)
})

}
init()
document.addEventListener('DOMContentLoaded', init)

</script>
