import React from 'react';
import {GrNotification} from 'react-icons/gr';
import {BiMessageAltDetail, BiNotification, BiUserCircle} from 'react-icons/bi';
import {AiOutlineHeart, AiOutlineDatabase, AiFillNotification, AiOutlineNotification} from 'react-icons/ai';
import {RiFindReplaceLine} from 'react-icons/ri';
// import './Header.css'
import {  HeaderLiXlive, HeaderliRight, 
  HeaderliRightd, HeaderlisMenu, HeaderlisMenuUlsousMenu, 
  HeaderlisMenuUlsousMenuli, HeaderNav, HeaderUl,
   HeaderUldconnect,
   HeaderUldInputtext,
   HeaderUldtextCh,
   HeaderUldxlive, 
   HeaderBodyy,
   Option} from './Header.element';
  
import logo from "./xcams.PNG";

const Header = () => {
  return (
    
<HeaderBodyy>
      <HeaderNav>
              <HeaderUl >

                <HeaderLiXlive >
                  <HeaderUldxlive src= {logo}/> 
                  <HeaderUldconnect >250 connect cams </HeaderUldconnect>
                  <HeaderUldtextCh >
                    <HeaderUldInputtext type="text" />
                    <RiFindReplaceLine/>
                  </HeaderUldtextCh>
                </HeaderLiXlive>
                
                
                <HeaderliRight >
                  <HeaderliRightd><AiOutlineNotification/></HeaderliRightd>
                  <HeaderliRightd><BiMessageAltDetail/></HeaderliRightd>
                  <HeaderliRightd><AiOutlineHeart/></HeaderliRightd>
                  <HeaderliRightd><AiOutlineDatabase/></HeaderliRightd>
                  <HeaderliRightd>|</HeaderliRightd>
                  <HeaderliRightd><BiUserCircle/></HeaderliRightd>
                  <HeaderliRightd>|</HeaderliRightd>
                  <HeaderlisMenu>
                    <HeaderlisMenuUlsousMenu >
                      
                          <Option value="en" >
                                  English
                          </Option>
                          <Option value="fr"  >                             
                                  Français
                          </Option>
                    
                    </HeaderlisMenuUlsousMenu>
                    </HeaderlisMenu>
                    
                  </HeaderliRight>
              
              </HeaderUl>
          </HeaderNav>

  </HeaderBodyy>
      
  )
}

export default Header
