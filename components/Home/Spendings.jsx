import React from 'react'
import Container from '../Container'
import Banner from '../Banner/index'
import { MainContext } from './Home'
import { setUsdCurrency } from '../../utilities'

export default function Spendings({children}){
    const {mainAccounts, expenses, savings} = React.useContext(MainContext)
    

   
    function mountComponent(){
        const newArray=[mainAccounts,expenses,savings]
        const dataToMount= newArray.find(element => element.on)
        if (dataToMount){
            const spentArr = dataToMount.spendings.map(object=>object.spent)
            const maxSpent = Math.max(...spentArr.map(Number))
            const componentArr=dataToMount.spendings.map(object => {
                const width= (object.spent / maxSpent)*100
                const realWidth= width>40 ? width : width+30
                return(
                <Banner key={object.category} style={{ width: `${width>40 ? width : width+30}%` }}>
                    <Banner.Left>{object.category}</Banner.Left>
                    <Banner.Right>{setUsdCurrency(object.spent)}</Banner.Right>
                </Banner>
            )})
            
            return componentArr
        }
        
    }

    return (
        <Container className="spendings">
            <Container.Title>Spendings</Container.Title>
            <Container.Elements className="spendings-innerCont">
                {mountComponent()}

            </Container.Elements>
        </Container>
    )
}