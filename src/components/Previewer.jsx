import Markdown from 'marked-react'
import { useEffect, useRef } from 'react';
import Window from './Window'

const Previewer = (props) => {
    const handleMaximize = () => {
        props.maximizeHandler('previewer');
    }
    return (
        <Window
            isMaximized={props.isMaximized}
            isMinimized={props.isMinimized}
            onMaximize={handleMaximize}
            id={props.id}
            title="Previewer"
            className="max-w-4xl">
            <div 
                className={`h-full overflow-y-scroll ${props.className}`}>
                <Markdown>{props.content}</Markdown>
            </div>
        </Window>
    )
}
export default Previewer;