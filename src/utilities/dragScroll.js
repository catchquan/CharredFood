export default function dragScroll(eleRef, options){
    let pos = {}
    let ref = eleRef.current;

    if(options && options.unmount){
        ref.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
    }

    function handleMouseDown(e){
        pos = { left: ref.scrollLeft, x: e.clientX }
        ref.style.cursor = "grabbing"
        ref.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
    }

    function handleMouseMove(e){
        if(options && options.stateSetter){
            options.stateSetter(true)
        }
        const dx = e.clientX - pos.x
        ref.scrollTo({ left: pos.left - dx})
    }

    function handleMouseUp(){
        if(options && options.stateSetter){
            options.stateSetter(false)
        }
        ref.removeEventListener('mousemove', handleMouseMove)
        ref.style.cursor = ''
    }

    ref.addEventListener('mousedown', handleMouseDown)
}