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
    if(!!articles){
      setArticlesSelect([
      articles[0],
      articles[1],
      articles[2],
      articles[3],
      articles[4],
      articles[5],
      articles[6],
      articles[7],
      articles[8],
      articles[9],
    ])
    }else{
      console.log("IGnore")
    }
    
    
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
