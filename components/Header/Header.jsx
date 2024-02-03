import React from 'react'
import HeaderContainer from './HeaderContainer'
import HeaderIcon from './HeaderIcon'
import HeaderOption from './HeaderOption'
import HamburgerIcon from './HamburgerIcon'
import useToggle from '../../hooks/useToggle'
import { AppContext } from '../../App'

const HeaderContext = React.createContext()
export {HeaderContext}

export default function Header(){

    const {selection, setSelection} = React.useContext(AppContext)
    const [open, toggleOpen] = useToggle({
        initialValue: false,
    })

    const headerArray = ["Home","Payments","Savings","Financing","Stocks"]

    const isNotSmallDevice = window.innerWidth > 768

        const [isSmallScreen, setIsSmallScreen] = React.useState(false);
      
        React.useEffect(() => {
          const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
          };
      
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);


    function mountComponent(){
        const componentArr= headerArray.map(option => (
        <HeaderOption key={option} className={selection === option && "selected"}>
            {option}
        </HeaderOption>))

        return componentArr
    } 

    function handleClick(element){
       setSelection(element.children)
       isSmallScreen && toggleOpen()
      }



    return (
        <HeaderContext.Provider value={{handleClick, open, toggleOpen}}>
            <header className="hero">
                <HeaderIcon/>
                <HamburgerIcon />
                {(open || !isSmallScreen) && <HeaderContainer>{mountComponent()}</HeaderContainer>}    
            </header>
        </HeaderContext.Provider>
        
    )
}