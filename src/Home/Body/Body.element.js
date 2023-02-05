import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBody = styled.a`
        background-color: white;
        padding: 109px;

        border-width: 1px;
        border: black solid;

        &:hover{
                background-color: rgba(240, 234, 234, 0.546);
        }
        @media screen and (max-width: 1115px){
                padding: 88px;
        }

        @media screen and (max-width: 1069px){
                padding: 84px;
        }

        @media screen and (max-width: 1033px){
                padding: 81px;
        }

        @media screen and (max-width: 992px){
                padding: 78px;
        }

        @media screen and (max-width: 965px){
                padding: 76px;
        }

        @media screen and (max-width: 945px){
                padding: 74px;
        }

        @media screen and (max-width: 919px){
                padding: 69px;
        }

        @media screen and (max-width: 869px){
                padding: 68px;
        }

        @media screen and (max-width: 855px){
                padding: 67px;
        }

        @media screen and (max-width: 845px){
                padding: 65px;
        }

        @media screen and (max-width: 815px){
                padding: 63px;
        }

        @media screen and (max-width: 797px){
                padding: 62px;
        }

        @media screen and (max-width: 788px){
                padding: 61px;
        }

        @media screen and (max-width: 770px){
                padding: 59px;
        }

        @media screen and (max-width: 755px){
                padding: 56px;
        }

        @media screen and (max-width: 713px){
                padding: 54px;
        }

        @media screen and (max-width: 690px){
                padding: 52px;
        }

        @media screen and (max-width: 660px){
                padding: 50px;
        }

        @media screen and (max-width: 635px){
                padding: 48px;
        }

        @media screen and (max-width: 626px){
                padding-top: 112px;
                padding-bottom: 102px;
                padding-left: 143px;
                padding-right: 143px;
                
        }

        @media screen and (max-width: 590px){
                               
                padding: 137px;
        }

        @media screen and (max-width: 570px){
                padding: 132px;
        }

        @media screen and (max-width: 555px){
                padding: 128px;
        }

        @media screen and (max-width: 525px){
                padding: 120px;
        }

        @media screen and (max-width: 505px){
                padding: 115px;
        }

        @media screen and (max-width: 480px){
                padding: 110px;
        }

        @media screen and (max-width: 465px){
                padding: 105px;
        }

        @media screen and (max-width: 445px){
                padding: 100px;
        }

        @media screen and (max-width: 430px){
                padding: 96px;
        }

        @media screen and (max-width: 415px){
                padding: 92px;
        }

        @media screen and (max-width: 395px){
                padding: 88px;
        }

        @media screen and (max-width: 386px){
                padding: 86px;
        }


`

export const DivBody = styled.body`
        background-color: rgb(10, 10, 10);
        /* position: absolute; */
        /* top: -15px;
        left: 10px; */
        width: 100%;
`

export const DivTitleContent = styled.div`
        color: white;
        display: flex;
        font-size: 12px;
        margin-top: 10px;
        width: 100%;
        @media screen and (max-width: 939px){
                width: 939px;
                
        }

        @media screen and (max-width: 626px){
                display: none;
        }
`

export const DivBodyCarre = styled.div`
        display: inline;
        position: relative;
                top: 95px;
                left: 1px;

        @media screen and (max-width: 626px){
                position: relative;
                top: 95px;
                left: 10px;
        }
        
`

export const DivCarreContent = styled.div`
        display: flex;
        /* padding-top: 50px; */
        @media screen and (max-width: 626px){
                display: inline;
        }
`

export const Div = styled.div`
        display: flex;
        padding-left: 15px;
        padding-right: 15px;
        @media screen and (max-width: 1115px){
                display: inline;
                padding-left: 15px;
                padding-right: 15px;
        }

        @media screen and (max-width: 859px){
                
                padding-left: 12px;
                padding-right: 12px;
        }

        @media screen and (max-width: 800px){
                
                padding-left: 10px;
                padding-right: 10px;
        }

        @media screen and (max-width: 766px){
                
                padding-left: 8px;
                padding-right: 8px;
        }

        @media screen and (max-width: 730px){
                
                padding-left: 6px;
                padding-right: 6px;
        }

        @media screen and (max-width: 693px){
                
                padding-left: 4px;
                padding-right: 4px;
        }

        @media screen and (max-width: 659px){
                
                padding-left: 2px;
                padding-right: 2px;
        }
`

export const HCarre = styled.div`
        display: flex;
        font-size: 25px;

        @media screen and (max-width: 1115px){
                margin-left: 250px;
        }

        @media screen and (max-width: 1035px){
                margin-left: 200px;
        }

        @media screen and (max-width: 984px){
                margin-left: 50px;
        }

        @media screen and (max-width: 898px){
                margin-left: 10px;
        }
`

export const HCarrediv = styled.div`
        
        padding-left: 0.2em;
        padding-right: 0.2em;
        &:hover{
                color: orange;
        }

        
`

export const Divdiv = styled.div`
        padding-left: 0.2em;
        padding-right: 0.2em;
        &:hover{
                color: orange;
        }
`

export const SousMenuDiv = styled.div`
        
        @media screen and (max-width: 626px){
                /* border: solid 1px white; */
                padding-top: 7px;
                padding-right: 7px;
                padding-bottom: 7px;

                width: 100%;
                /* height: 50px; */
                color: white;
        }
       
        
`

export const SousMenuDivDiv = styled.div`
        display: inline;
        padding-left: 0.2em;
        padding-top: 0.4em;
        padding-bottom: 0.4em;
        /* border-bottom: solid 1px white; */
        width: 100px;
`

export const SousMenuDivDivDiv = styled.div`
        border-bottom: solid 1px white;
        padding-left: 0.1em;
        padding-top: 0.4em;
        padding-bottom: 0.2em;
        text-align: center;

`

export const DivCarreMobile= styled.div`
        /* display: inline; */
        /* margin: 15px; */
        height: 130px;
        
        @media screen and (max-width: 1200px){
                
        }
`
export const DivMoreGirl= styled.div`
        border: white solid;
        border-radius: 3px;
        border-width: 5px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px;
        margin-bottom: 120px;
        color: white;
        font-size: 40px;
        text-align: center;
        width: 6em;
`

export const NavMenu = styled.ul`
    display: none;
    align-items: center;
    list-style: none;
    text-align: center;
    color: white;


    @media screen and (max-width: 626px) {
        display: flex;
        flex-direction: column;
        width: 91.5%;
        height: auto;
        position: absolute;
        z-index: 10;
        top: 30px;
        left: ${({click}) => (click ? 0 : '-110%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;


export const MobileIcon = styled.div`
    display: none;
    color: aliceblue;
    @media screen and (max-width: 626px) {
        display: block;
        position: absolute;
        top: 35px;
        left: 40px;
        z-index: 19;
        color: aliceblue;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;

   
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const Select = styled.select`
    padding: 10px;
    margin: 20px;
    width: 100px;
    height: 40px;
    color: white; 
    background-color: black;
    border-radius: 10%;
`;




