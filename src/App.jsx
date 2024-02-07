import React, { Component } from 'react'
import Home from './Components/Movie/Movie'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/TV/Tv'
import Contacts from './Components/Contacts/Contacts'
import NotFound from './Components/NotFound/NotFound'

let routers = createBrowserRouter([
  {
  path:'/', element:<Layout/> ,children:[
    {index: true, element:<Home/>},
    // {path:'parent', element:<Parent/>},
    {path:'about', element:<About/>},
    {path:'contacts', element:<Contacts/>},
    {path: '*', element: <NotFound/>}
  ]}
])



export default class App extends Component {
  state={}
  render() {
    return <RouterProvider router={routers}/>
    
  }
}

