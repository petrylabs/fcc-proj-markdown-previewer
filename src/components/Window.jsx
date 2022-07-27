import { useEffect, useState } from 'react'
import Toolbar from './Toolbar'

import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMinimize } from '@fortawesome/free-solid-svg-icons'

const Window = (props) => {
    const windowStyles = [
        {
            key: 'display',
            value: 'flex flex-col'
        },
        {
            key: 'width',
            value: 'w-full'
        },
        {
            key: 'height',
            value: 'h-[80vh]'
        },
        {
            key: 'background',
            value: 'bg-[#c0d8d8]'
        },
        {
            key: 'border',
            value: 'border-solid border-2'
        },
        {
            key: 'margin',
            value: 'mr-2 ml-2'
        }
    ]
        .map(style => style.value)
        .join(' ');  

    return (
        <div
            id={props.id} 
            className={`window ${windowStyles} ${props.className} ${props.isMaximized ? 'maximized' : ''} ${props.isMinimized ? 'minimized' : ''}`}>
            <Toolbar
                onMaximize={props.onMaximize}
                title={props.title}
                icon={props.isMaximized ? faMinimize : faMaximize}
            />
            {props.children}
        </div>
    )
}
export default Window;