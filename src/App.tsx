import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Categories } from './Components/Categories'
import { fetchData } from './api/api'
import { News } from './Components/News'
import { Search } from './Components/Search'

function App() {
  const [share,setShare] = useState("argentina")
  const [initial,setInitial] = useState(1)
  const [articlesSelect,setArticlesSelect] = useState([])
  const [articles,setArticles] = useState([])

  const [isActive,setIsActive] = useState(false)
 

  useEffect(()=>{
    fetchData(setArticles,share)
    
  },[share])

  useEffect(()=>{
   
    const newStateArticles = articles.slice(initial,initial+10)
    setArticlesSelect(newStateArticles)
     console.log("new articles",articlesSelect)
  },[articles,initial])

  return (
    <div >
      <Navbar
      isActive={isActive}
      setIsActive={setIsActive}
      ></Navbar>
      <Search
      setShare={setShare}
      />
      <Categories
      isActive={isActive}
      setIsActive={setIsActive}
      setShare={setShare}
      ></Categories>
      <News 
      articles={articlesSelect}
      ></News>
    </div>
  )
}

export default App
