import React from 'react'
import Banner from '../Banner/index'
import Button from '../Button/Button'
import Container from '../Container/index'
import { MainContext } from './Home'
import useToggle from '../../hooks/useToggle'

export default function HomeAccounts(){
   
    const {mainAccounts, expenses, savings, handleData} = React.useContext(MainContext)
    
    const newArray=[mainAccounts,expenses,savings]
    
    function mountComponent(){
        const BannerArr= newArray.map(object=>{
            return(
                <Button key={object.id} className="accounts-btn" onClick={()=>handleData(object)}>
                    <Banner className={`accountsBtn-banner ${object.on && "selected accountOpt-selected"}`}>
                        <Banner.Left>{object.title}</Banner.Left>
                        <Banner.Right>{object.balance}</Banner.Right>
                    </Banner>
                </Button>
            )
        })


        return BannerArr
    }


    


    return  (
        <Container className="accounts">
            <Container.Title>Accounts</Container.Title>
            <Container.Elements className="accounts-innerCont">
            {mountComponent()}
            </Container.Elements>
        </Container>
    
    )
}