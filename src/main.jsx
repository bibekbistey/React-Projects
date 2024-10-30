import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Todo from './components/Todo.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Quiz from './components/Quiz.jsx'
import Crud from './components/Crud.jsx'
import { TodoContextProvider } from './context/TodoContext.jsx'
import { CardContextProvider } from './context/CardContext.jsx'
import { QuizContextProvider } from './context/QuizContext.jsx'
import { CrudContextProvider } from './context/CrudContext.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home/>}/>
      <Route path='todo' element={<Todo/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='product' element={<Products/>}/>
      <Route path='quiz' element={<Quiz/>}/>
      <Route path='crud' element={<Crud></Crud>}/>
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrudContextProvider>
    <QuizContextProvider>
    <CardContextProvider>
    <TodoContextProvider>
      <RouterProvider router={router}/>
    </TodoContextProvider>
    </CardContextProvider>
    </QuizContextProvider>
    </CrudContextProvider>
    
  </StrictMode>,
)
