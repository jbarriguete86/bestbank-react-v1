import React from "react"
import Header from './components/Header/Header'
import Home from "./components/Home/Home"
import DevelopingDisplay from "./components/DevelopingDisplay/DevelopingDisplay"
import { accounts } from "./data"
import  {setUsdCurrency}  from "./utilities"

const AppContext = React.createContext()
export {AppContext}


export default function App() {
  
  const [data, setData] = React.useState("")
  const [selection, setSelection]= React.useState("Home")

  React.useEffect(()=>{
    !data && fetchData()
  },[])


function fetchData(){ 
  const newAccounts = accounts.map((element) =>({
    ...element, 
    balance:setUsdCurrency(element.balance),
    on:false
  }))
  setData(newAccounts)
}

function updateOnData(element){
  setData((prevData) => {
    return prevData.map((data) =>
      data.id === element.id ? { ...data, on: true } : { ...data, on: false }
    )
  })
}

  

  return data &&(
    <AppContext.Provider value={{selection, setSelection}}>
        <div className="app-container">
        <Header /> 
        {selection === "Home" ? (<Home 
        mainAccounts={data[0]}
        expenses={data[1]}
        savings={data[2]}
        handleData={updateOnData}/>) :
        (<DevelopingDisplay/>)
        } 
        
      </div>
    </AppContext.Provider>
    
  )
  }