import styled from "styled-components";

export const HeaderBodyy = styled.div`
        width: 100%;
        display: flex;
        /* border: 1px solid black; */
        background-color: rgb(183,0,183);
        color: white;
        
`

export const HeaderNav = styled.nav`
        color: white;
        width: 100%;
        display: flex;
`

export const HeaderUldconnect = styled.div`
        color: orange;
        font-size: 23px;
        margin-left: 9px;
        margin-right: 9px;
        @media screen and (max-width: 960px){
                display: none;
        }

        @media screen and (max-width: 864px){
                display: none;
        }
`


export const HeaderUl = styled.div`
       width: 100%;
        display: flex;
        font-size: 27px;
`

export const HeaderUldxlive = styled.img`
        width: 130px;
`

export const HeaderLiXlive = styled.div`
        width: 1000px;
        text-align: none;
        /* border: 1px solid black; */
        display: flex;
        padding: 2px;

        @media screen and (max-width: 1095px){
                
                width: 650px;
        }
        @media screen and (max-width: 960px){
                width: 350px;
        }
        @media screen and (max-width: 690px){
                width: 280px;
        }

        @media screen and (max-width: 652px){
                
                width: 230px;
        }

        @media screen and (max-width: 566px){
                width: 150px;
        }
`

export const HeaderUldtextCh = styled.div`
       /* border: 1px solid black; */
       padding-top: 0px;
       width: 230px;
       display: flex;
       font-size: 19px;
       text-align: center;
       background-color: rgb(100,0,100);

       @media screen and (max-width: 690px){
                width: 150px;
        }

        @media screen and (max-width: 652px){
                width: 110px;
        }

        @media screen and (max-width: 566px){
                width: 30px;
                text-align: center;
                padding: 0.1em;
        }
`

export const HeaderUldInputtext = styled.input`
       height: 2em;
        margin-top: auto;
        margin-bottom: 0px;
        padding: 2px;
        width: 200px;
        background-color: rgb(100,0,100);
        border: none;
        color: aliceblue;

        @media screen and (max-width: 690px){
                width: 130px;
        }

        @media screen and (max-width: 652px){
                width: 90px;
        }

        @media screen and (max-width: 566px){
                display: none;
        }
`

export const HeaderliRight = styled.div`
        display: flex;
        width: 30%;
        height: 30px;
        padding-bottom: 5px;
       

        @media screen and (max-width: 960px){
                margin-left: 1px;
        }
`

export const HeaderliRightd = styled.div`
        padding-right: 0.3em;
        padding-left: 0.3em;
        padding-top: 0.1em;

        &:hover{
                color: orange;
        }

        @media screen and (max-width: 960px){
                padding-right: 0.2em;
                padding-left: 0.2em;
        }

        @media screen and (max-width: 460px){
                padding-right: 0.1em;
                padding-left: 0.1em;
        }

        @media screen and (max-width: 426px){
                padding-right: 0.12em;
                padding-left: 0.12em;
                font-size: 25px;
        }
       
`
export const HeaderlisMenu = styled.div`
        
`

export const HeaderlisMenuUlsousMenu = styled.select`
        width: 7em;
        height: 2em;
        font-size: 15px;
        background-color: rgb(100,0,100);
        color: aliceblue;

        @media screen and (max-width: 450px){
                width: 2.7em;
        }
`

export const HeaderlisMenuUlsousMenuli = styled.div`
       
`




export const Option = styled.option`
        background-color: rgb(100,0,100);
        color: aliceblue;
`