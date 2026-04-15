import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import counterAtom from './states/counterAtom'
import ComponentA from './components/componentA'
import ComponentB from './components/ComponentB'
import themeAtom from './states/themeAtom'
import UI from './components/Theme_UI'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  var [theme, setTheme] = useRecoilState(themeAtom)

  return (
    <>
      <ComponentA></ComponentA>

      <ComponentB></ComponentB>

      <br />
      
      <UI></UI>
      <h2>Change theme</h2>
      <div>
        <button onClick={() => {
           if (theme == 'dark')
            setTheme('light');
          else
            setTheme('dark');
          localStorage.setItem('theme', theme);
        }
      }>Change theme</button>
      </div>

      <Login></Login>

      <Logout></Logout>
    </>
  )
}

export default App
