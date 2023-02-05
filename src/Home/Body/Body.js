import React, {useEffect, useState} from 'react';
// import './Body.css'
import { BiGridSmall} from 'react-icons/bi';
import {HiSquares2X2} from 'react-icons/hi2';
import {IoSquareSharp} from 'react-icons/io5';
import {SlSizeFullscreen} from 'react-icons/sl';
import { Div, DivBody, DivBodyCarre, DivCarreContent, DivCarreMobile, Divdiv, DivMoreGirl, DivTitleContent, HCarre,
	 HCarrediv, LinkBody, MobileIcon, 
	 NavbarContainer,  NavLogo, NavMenu, Select, 
	 SousMenuDiv, SousMenuDivDiv, SousMenuDivDivDiv } from './Body.element';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Body = () => {

	const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobile = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

   
	// function handleClick2(){
    //     // var val = document.getElementById("lang");
    //     // console.log(document.getElementById("lang").value);
    //     var language = document.getElementById("lang").value;
    //     // i18n.changeLanguage(language);
    // }
   
  return (
 
    <DivBody class="body">

    <DivTitleContent class="titleContent">
      <Div>
          <Divdiv>Girl speaks: </Divdiv>
            <Divdiv>English</Divdiv>
            <Divdiv>French</Divdiv>
            <Divdiv>Dutch</Divdiv>
            <Divdiv>Spanish</Divdiv>
            <Divdiv>Italian</Divdiv>
            <Divdiv>German</Divdiv>
      </Div>
      <div>|</div>
      <Div>
            <Divdiv>Women </Divdiv>
            <Divdiv>Couples</Divdiv>
            <Divdiv>Trans</Divdiv>
      </Div>
      <div>|</div>
      <Div>
      
            <Divdiv>Top</Divdiv>
            <Divdiv>New</Divdiv>
            <Divdiv>InShow</Divdiv>
      </Div>            
      <div>|</div>
      <Div>
      		<Divdiv>5cr   </Divdiv>
            <Divdiv>7cr</Divdiv>
            <Divdiv>10cr</Divdiv>
      
      </Div>      
      <div>|</div>
            
      <Div>

      <Divdiv>Blonde</Divdiv>
            <Divdiv>Brunette</Divdiv>
            <Divdiv>Red hair</Divdiv>
      </Div>
      <div>|</div>  

         <Div>
         <Divdiv>Small tits</Divdiv>
            <Divdiv>Big tits</Divdiv>
          
        </Div>   

        <div>|</div>   

        <Div>
        <Divdiv>Thin</Divdiv>
            <Divdiv>XL</Divdiv>
        
        </Div> 

        <div>|</div>

        <Div>
        <Divdiv>18-25</Divdiv>
            <Divdiv>40+</Divdiv>
        
        </Div>  
        <div>|</div>
            
        <Div>

        <Divdiv>Connected Toy</Divdiv>
        </Div>
            

            

            

            

            <HCarre class="carre">
              <HCarrediv><BiGridSmall/></HCarrediv>
              <HCarrediv><HiSquares2X2/></HCarrediv>
              <HCarrediv><IoSquareSharp/></HCarrediv>
              <HCarrediv><SlSizeFullscreen/></HCarrediv>
            </HCarre>
            
        </DivTitleContent>

		<NavbarContainer>
                    <NavLogo 
                    to="/" 
                    // onClick={closeMobile}                   
                    >
                    
                    </NavLogo>
                    <MobileIcon 
                    onClick={handleClick}
                    >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                
                    <NavMenu 
                    onClick={handleClick} 
                    click={click}>
						

                    

        <SousMenuDiv>

			
          <SousMenuDivDiv>
            <SousMenuDivDivDiv>Girl speaks: </SousMenuDivDivDiv>
            <SousMenuDivDivDiv>English</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>French</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Dutch</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Spanish</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Italian</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>German</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>Women </SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Couples</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Trans</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>Top</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>New</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>InShow</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>5cr   </SousMenuDivDivDiv>
            <SousMenuDivDivDiv>7cr</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>10cr</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>Blonde</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Brunette</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Red hair</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>Small tits</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Big tits</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>Blonde</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Brunette</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>Red hair</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>Thin</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>XL</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  	<SousMenuDivDivDiv>18-25</SousMenuDivDivDiv>
            <SousMenuDivDivDiv>40+</SousMenuDivDivDiv>
          </SousMenuDivDiv>

		  <SousMenuDivDiv>
		  <SousMenuDivDivDiv>Connected Toy</SousMenuDivDivDiv>
          </SousMenuDivDiv>
        </SousMenuDiv>

		</NavMenu>

</NavbarContainer>

        <DivBodyCarre >


          	<DivCarreContent class="carreContent1">
            	<DivCarreMobile>
				<LinkBody href="/Back"></LinkBody>
          		<LinkBody href="/Back"></LinkBody>

			</DivCarreMobile>

			<DivCarreMobile>
				<LinkBody href="/Back"></LinkBody>
          		<LinkBody href="/Back"></LinkBody>
			</DivCarreMobile>
          
			<DivCarreMobile>
				<LinkBody href="/Back"></LinkBody>
				<LinkBody href="/Back"></LinkBody>
			</DivCarreMobile>

          </DivCarreContent>
	    
          <DivCarreContent class="carreContent2">

			<DivCarreMobile>
				<LinkBody href="/Back"></LinkBody>
          			<LinkBody href="/Back"></LinkBody>
			</DivCarreMobile>
          
		  	<DivCarreMobile>
				<LinkBody href="/Back"></LinkBody>
          			<LinkBody href="/Back"></LinkBody>
			</DivCarreMobile>
          
		  	<DivCarreMobile>
				<LinkBody href="/Back"></LinkBody>
          			<LinkBody href="/Back"></LinkBody>
			</DivCarreMobile>
          

          </DivCarreContent>

          <DivCarreContent class="carreContent3">
		<DivCarreMobile>
			<LinkBody href="/Back"></LinkBody>
          		<LinkBody href="/Back"></LinkBody>
		</DivCarreMobile>

		<DivCarreMobile>
			<LinkBody href="/Back"></LinkBody>
          		<LinkBody href="/Back"></LinkBody>
		</DivCarreMobile>
          
		<DivCarreMobile>
 			<LinkBody href="/Back"></LinkBody>
          		<LinkBody href="/Back"></LinkBody>			
		</DivCarreMobile>
         
          </DivCarreContent>
          
          <DivMoreGirl class="moreGirl">More Girl</DivMoreGirl>

        </DivBodyCarre>
       

    </DivBody>
  
  )
}

export default Body
