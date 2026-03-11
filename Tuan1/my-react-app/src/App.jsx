import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Bai1/ProductCard.css'
import './Bai2/Button.css'
import './Bai3/Alert.css'
import ProductCard from './Bai1/ProductCard'
import Button from './Bai2/Button'
import Alert from './Bai3/Alert'
import Form from './Bai4/Form'
import ProductList from './Bai5/Layout'

function App() {

  return (
    <>
      {/* <ProductCard></ProductCard> */}

      {/* <Button type='primary'></Button>
      <Button type='danger'></Button>
      <Button type='success'></Button> */}

      {/* <Alert></Alert> */}

      {/* <Form></Form> */}

      <ProductList></ProductList>
    </>
  )
}

export default App
