import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../Tuan2/Bai1/bai1.jsx'
import Student from '../Tuan2/Bai1/bai1.jsx'
import CounterApp from '../Tuan2/Bai2/bai2.jsx'
import StateInput from '../Tuan2/Bai3/bai3.jsx'
import StatusBadge from '../Tuan2/Bai4/bai4.jsx'
import TodoList from '../Tuan2/Bai5/TodoList.jsx'

function App() {

  const std1 = {
    name: 'Nguyễn Thanh Hoàng',
    mssv: '23675601',
    class: 'DHKTPM19B'
  };

  return (
    <>
      {/* <Student std={std1}></Student> */}

      {/* <CounterApp></CounterApp> */}

      {/* <StateInput></StateInput> */}
      
      {/* <StatusBadge></StatusBadge> */}

      <TodoList></TodoList>
    </>
  )
}

export default App
