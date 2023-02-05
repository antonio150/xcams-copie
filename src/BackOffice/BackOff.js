import React, {useEffect, useState} from 'react';
import {TiThSmall} from 'react-icons/ti';
import {ImDatabase, ImCancelCircle, ImStarEmpty} from 'react-icons/im';
import {BsHeadset} from 'react-icons/bs';
import {BiWebcam, BiVolumeLow, BiFullscreen, BiUserCircle} from 'react-icons/bi';
import {CiMicrophoneOn} from 'react-icons/ci';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import {RiFindReplaceLine, RiMailLockLine} from 'react-icons/ri';
import {GoCommentDiscussion} from 'react-icons/go';
import {FiStar} from 'react-icons/fi';
import {FaBars, FaTimes} from 'react-icons/fa';

import "./BackOff.css";
import { DivAction, DivBodyBack, DivChattool, DivChattoolDiv, Divdiv, DivFoot, DivFootDiv, DivFootDivPrivate2, DivIconInfo, DivIconInfoLetter, DivIconInfoLetterDiv, DivIdent, DivImage, DivImgLetter, DivImgList, DivImgListDiv, DivInfo, DivInfoMobile, DivLetter, DivMennu, DivMennuDiv, DivOption, DivOptionDiv, DivPrivate1, DivPrivate1Div, DivShow, DivStart, DivTitleMenu, DivVip, DivVipDiv, DivXcams, MobileIcon, NavbarContainer, NavLogo, NavMenu } from './BackOff.element';

const BackOff = () => {

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

  return (
    <>
    <DivBodyBack class='bodyBack'>
        <DivTitleMenu class="titleMenu">
                <DivXcams class="xcams" to="/">xcams</DivXcams>

                <DivShow class="show">PRIVATE SHOW</DivShow>
        </DivTitleMenu>
        

        <DivMennu class="mennu">
                <DivMennuDiv><TiThSmall/></DivMennuDiv>
                <DivMennuDiv><ImDatabase/></DivMennuDiv>
                <DivMennuDiv><BsHeadset/></DivMennuDiv>
                <DivMennuDiv><BiWebcam/></DivMennuDiv>
                <DivMennuDiv><CiMicrophoneOn/></DivMennuDiv>
                <DivMennuDiv><BiVolumeLow/></DivMennuDiv>
                <DivMennuDiv><BiFullscreen/></DivMennuDiv>
                

        </DivMennu>

        <DivOption class="option">
                <DivOptionDiv class="left"> <AiOutlineLeft/></DivOptionDiv>
                <DivOptionDiv class="rightt"> <AiOutlineRight/></DivOptionDiv>
                <DivOptionDiv class="exit"><ImCancelCircle/> </DivOptionDiv>
                <DivOptionDiv class="find"><RiFindReplaceLine/> </DivOptionDiv>
        </DivOption>

        <DivStart class="star">
                <ImStarEmpty/>
        </DivStart>


        <Divdiv>
                <DivInfo class="info">
                        <DivIconInfo class="iconInfo">
                                <DivIconInfoLetter class="iconInfoLetter">
                                        <DivIconInfoLetterDiv class="midnight"> MidnightSky </DivIconInfoLetterDiv>
                                        <DivIconInfoLetterDiv>English</DivIconInfoLetterDiv>
                                </DivIconInfoLetter>
                                
                                
                                <DivChattool class="chatTool">
                                        <DivChattoolDiv><GoCommentDiscussion/></DivChattoolDiv>
                                        <DivChattoolDiv><RiMailLockLine/></DivChattoolDiv>
                                        <DivChattoolDiv><BiUserCircle/></DivChattoolDiv>
                                        <DivChattoolDiv><FiStar/></DivChattoolDiv>
                                </DivChattool>
                                
                                        
                                
                        </DivIconInfo>
                        
                        <DivIdent class="ident">
                                <DivImage class="image"></DivImage>
                                <DivImgLetter class="imgLetter">19 years old <br/>I speak <b>english</b></DivImgLetter>

                        </DivIdent>
                        <DivLetter class="letter"><i>COLLEGE GIRL WHO LOVES to MEET NEW PEOPLE ALL OVER THE WORLD TO PARTY AND
                                HAVE FUN!
                                </i>
                        </DivLetter>

                        <div>I love</div>
                        <DivImgList class="imgList">
                                <DivImgListDiv></DivImgListDiv>
                                <DivImgListDiv></DivImgListDiv>
                                <DivImgListDiv></DivImgListDiv>
                        </DivImgList>

                        <DivAction class="action">
                                <DivPrivate1 class="private1">
                                        <DivPrivate1Div>Go Private</DivPrivate1Div>
                                        <DivPrivate1Div>10 credits/min</DivPrivate1Div>
                                </DivPrivate1>
                                <DivVip class="vip">
                                        <DivVipDiv>Go VIP</DivVipDiv>
                                        <DivVipDiv>20 credits/min</DivVipDiv>
                                </DivVip>
                        </DivAction>

                </DivInfo>

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
						
                
                
                
                <DivInfoMobile class="info">
                        <DivIconInfo class="iconInfo">
                                <DivIconInfoLetter class="iconInfoLetter">
                                        <DivIconInfoLetterDiv class="midnight"> MidnightSky </DivIconInfoLetterDiv>
                                        <DivIconInfoLetterDiv>English</DivIconInfoLetterDiv>
                                </DivIconInfoLetter>
                                
                                
                                <DivChattool class="chatTool">
                                        <DivChattoolDiv><GoCommentDiscussion/></DivChattoolDiv>
                                        <DivChattoolDiv><RiMailLockLine/></DivChattoolDiv>
                                        <DivChattoolDiv><BiUserCircle/></DivChattoolDiv>
                                        <DivChattoolDiv><FiStar/></DivChattoolDiv>
                                </DivChattool>
                                
                                        
                                
                        </DivIconInfo>
                        
                        <DivIdent class="ident">
                                <DivImage class="image"></DivImage>
                                <DivImgLetter class="imgLetter">19 years old <br/>I speak <b>english</b></DivImgLetter>

                        </DivIdent>
                        <DivLetter class="letter"><i>COLLEGE GIRL WHO LOVES to MEET NEW PEOPLE ALL OVER THE WORLD TO PARTY AND
                                HAVE FUN!
                                </i>
                        </DivLetter>

                        <div>I love</div>
                        <DivImgList class="imgList">
                                <DivImgListDiv></DivImgListDiv>
                                <DivImgListDiv></DivImgListDiv>
                                <DivImgListDiv></DivImgListDiv>
                        </DivImgList>

                        <DivAction class="action">
                                <DivPrivate1 class="private1">
                                        <DivPrivate1Div>Go Private</DivPrivate1Div>
                                        <DivPrivate1Div>10 credits/min</DivPrivate1Div>
                                </DivPrivate1>
                                <DivVip class="vip">
                                        <DivVipDiv>Go VIP</DivVipDiv>
                                        <DivVipDiv>20 credits/min</DivVipDiv>
                                </DivVip>
                        </DivAction>

                </DivInfoMobile>
         

		</NavMenu>

</NavbarContainer>


                <DivFoot class="foot">
                        <DivFootDiv class="footer">Welcome in the preview of Midnightesky's chat(15seconds) <br/>
                         MidnighteSky is waiting for you for a Private Show. Join her now!
                        </DivFootDiv>
                       
                        <DivFootDiv class="private2">
                                <DivFootDivPrivate2>Go Private</DivFootDivPrivate2>
                        </DivFootDiv>
                
                </DivFoot>                
                
                
        </Divdiv>

    </DivBodyBack>
       
    </>
  )
}

export default BackOff
