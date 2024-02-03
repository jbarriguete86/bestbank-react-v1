import React from 'react'
import Container from '../Container/index'
import HomeAccounts from './HomeAccounts'
import Spendings from './Spendings'
import Button from '../Button/Button'
import Banner from '../Banner/index'

const MainContext = React.createContext()
export {MainContext}


export default function Home({mainAccounts, expenses, savings, handleData}){
  
        function mountSpendingComponent(){
            const newArray=[mainAccounts,expenses,savings]
            const spendingStatus= newArray.find(object=>object.on)
            const spendingsArr= spendingStatus !== undefined && spendingStatus.spendings
            if(spendingsArr.length){
                return <Spendings/>
            }
        }

    
    


    return (
        <MainContext.Provider value={{mainAccounts, expenses, savings, handleData}}>
            <Container className="home">
                <Banner className="home-btns">
                    <Banner.Left>
                        <Button className="home-btn">Pay</Button>
                    </Banner.Left>
                    <Banner.Right>
                        <Button className="home-btn">Transfer</Button>
                    </Banner.Right>
                </Banner>
                <div className="homeElements-container">
                    <HomeAccounts/>
                    {mountSpendingComponent()}
                </div>
            </Container>   
        </MainContext.Provider>
        

    )
}