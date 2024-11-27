import { EVENTS } from '../utils/consts'

export function navigate (href){
    window.history.pushState({}, '', href)
    //crear un evento de navegación para que el usuario pueda navegar por la página
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  
}

export function Link ({ target, to,  ...props }) { 

    const handelClick = (event) => {
        
        const isMainEvent = event.button === 0;
        const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
        const isManageableEvent = target === undefined || target === '_self'; 
        if(isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handelClick} href={to} target={target} {...props}></a>
}