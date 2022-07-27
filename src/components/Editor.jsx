import { React, useEffect } from 'react';
import Window from './Window'

const Editor = (props) => {
    const handleMaximize = () => {
        props.maximizeHandler('editor');
    }
    const textAreaStyles = [
        {
            key: 'width',
            value: 'w-full'
        },
        {
            key: 'height',
            value: 'h-full'
        },
        {
            key: 'font',
            value: 'font-mono'
        },
        {
            key: 'outline',
            value: 'outline-none'
        },
        {
            key: 'background',
            value: 'bg-[#c0d8d8]'
        },
        {
            key: 'resize',
            value: 'resize-none'
        }
    ]
        .map(style => style.value)
        .join(' '); 

    return (
        <Window 
            isMaximized={props.isMaximized}
            isMinimized={props.isMinimized}
            onMaximize={handleMaximize}
            title="Editor"
            className="max-w-3xl">
            <div className="h-full">
                <textarea
                    onChange={props.changeHandler}
                    defaultValue={props.content}
                    className={textAreaStyles + props.className}
                    id={props.id}/>
            </div>
        </Window>
    )
}
export default Editor;