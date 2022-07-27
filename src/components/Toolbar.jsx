
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const Toolbar = (props) => {
    const toolbarStyles = [
        {
            key: 'padding',
            value: 'p-1 pr-2 pl-2'
        },
        {
            key: 'font',
            value: 'font-sans'
        },
        {
            key: 'display',
            value: 'flex justify-between'
        },
        {
            key: 'background',
            value: 'bg-[#4aa3a3]'
        }
    ]
        .map(style => style.value)
        .join(' ');    
    
    return (
        <div 
            className={toolbarStyles}>
            <div>
                <FontAwesomeIcon 
                className="mr-2 font-thin"
                icon={faFreeCodeCamp}/>
                {props.title}
            </div>
            <div>
                <FontAwesomeIcon 
                    onClick={props.onMaximize}
                    icon={props.icon}/>            
            </div>
        </div>
    )
}
export default Toolbar;