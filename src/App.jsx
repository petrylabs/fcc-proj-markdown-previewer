import { useEffect, useState } from 'react'
import './App.css'
import initialMarkdown from './assets/initial.md'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

function App() {
  const [markdown, setMarkdown] = useState();
  const [maximizedWindow, setMaximizedWindow] = useState('');
  
  useEffect(()=> {
    console.log('fetching....')
    fetch(initialMarkdown)
      .then(reponse => {
        return reponse.text()
      })
      .then(text => {
        setMarkdown(text);
      })
  }, []) 

  const handleChange = (event) => {
    const newValue = event.target.value;
    console.log('setting new value');
    setMarkdown(newValue);
  }

  const handleMaximize = (windowName) => {
    const newMaximizedWindow = maximizedWindow === windowName ? '' : windowName;
    setMaximizedWindow(newMaximizedWindow);
  }

  const isMaximized = (maximizedWindow, windowName) => {
    return maximizedWindow === windowName;
  }

  const isAnyOtherWindowMaximized = (maximizedWindow, windowName) => {
    return maximizedWindow !== windowName && maximizedWindow.length > 0;
  }
    
  return (
    <div 
      className="App flex flex-col items-center bg-robin-egg-blue min-h-screen p-6">
      
      <Editor 
        id="editor"
        maximizeHandler={handleMaximize}
        changeHandler={handleChange}
        isMaximized={isMaximized(maximizedWindow, 'editor')}
        isMinimized={isAnyOtherWindowMaximized(maximizedWindow, 'editor')}
        content={markdown}>
      </Editor>
        <Previewer 
          id="preview"
          maximizeHandler={handleMaximize}
          changeHandler={handleChange}
          isMaximized={isMaximized(maximizedWindow, 'previewer')}
          isMinimized={isAnyOtherWindowMaximized(maximizedWindow, 'previewer')}
          content={markdown} />
    
    </div>
  )
}

export default App
