import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "./girl.jpg";
import img2 from "./girl2.jpg";
import img4 from "./girl4.jpg";
import img5 from "./girl5.jpg";
import img6 from "./girl6.jpg";
import img7 from "./girl7.jpg";

export const DivBodyBack = styled.body`
color: white;
        background-image: url(${img});
        background-repeat: cover;
        width: 1345px;
        height: 650px;

        @media screen and (max-width: 1115px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1096px;
                height: 650px;
        }

        @media screen and (max-width: 1105px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1085px;
                height: 650px;
        }

        @media screen and (max-width: 1095px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1075px;
                height: 650px;
        }

        @media screen and (max-width: 1085px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1055px;
                height: 650px;
        }

        @media screen and (max-width: 1065px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1045px;
                height: 650px;
        }

        @media screen and (max-width: 1055px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1035px;
                height: 650px;
        }

        @media screen and (max-width: 1045px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1022px;
                height: 650px;
        }

        @media screen and (max-width: 1030px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 1007px;
                height: 650px;
        }

        @media screen and (max-width: 1015px){
                background-image: url(${img6});
                background-repeat: cover;
                width: 990px;
                height: 650px;
        }



        @media screen and (max-width: 995px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 970px;
                height: 650px;
        }

        @media screen and (max-width: 985px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 960px;
                height: 650px;
        }

        @media screen and (max-width: 965px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 940px;
                height: 650px;
        }

        @media screen and (max-width: 940px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 920px;
                height: 650px;
        }

        @media screen and (max-width: 925px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 900px;
                height: 650px;
        }

        @media screen and (max-width: 910px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 890px;
                height: 650px;
        }

        @media screen and (max-width: 895px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 870px;
                height: 650px;
        }

        @media screen and (max-width: 880px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 855px;
                height: 650px;
        }

        @media screen and (max-width: 865px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 840px;
                height: 650px;
        }

        @media screen and (max-width: 845px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 820px;
                height: 650px;
        }

        @media screen and (max-width: 830px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 805px;
                height: 650px;
        }

        @media screen and (max-width: 815px){
                background-image: url(${img4});
                background-repeat: inherit;

                width: 790px;
                height: 650px;
        }

        @media screen and (max-width: 800px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 770px;
                height: 650px;
        }

        @media screen and (max-width: 775px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 750px;
                height: 650px;
        }

        @media screen and (max-width: 760px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 730px;
                height: 650px;
        }

        @media screen and (max-width: 740px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 710px;
                height: 650px;
        }

        @media screen and (max-width: 725px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 699px;
                height: 650px;
        }

        @media screen and (max-width: 715px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 689px;
                height: 650px;
        }

        @media screen and (max-width: 700px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 679px;
                height: 650px;
        }

        @media screen and (max-width: 690px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 669px;
                height: 650px;
        }

        @media screen and (max-width: 680px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 659px;
                height: 650px;
        }

        @media screen and (max-width: 665px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 639px;
                height: 650px;
        }

        @media screen and (max-width: 650px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 629px;
                height: 650px;
        }

        @media screen and (max-width: 635px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 605px;
                height: 650px;
        }

        @media screen and (max-width: 620px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 595px;
                height: 650px;
        }

        @media screen and (max-width: 605px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 585px;
                height: 650px;
        }

        @media screen and (max-width: 595px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 565px;
                height: 650px;
        }

        @media screen and (max-width: 575px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 550px;
                height: 650px;
        }

        @media screen and (max-width: 565px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 540px;
                height: 650px;
        }

        @media screen and (max-width: 550px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 529px;
                height: 650px;
        }

        @media screen and (max-width: 540px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 519px;
                height: 650px;
        }

        @media screen and (max-width: 530px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 509px;
                height: 650px;
        }

        @media screen and (max-width: 520px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 495px;
                height: 650px;
        }

        @media screen and (max-width: 505px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 482px;
                height: 650px;
        }

        @media screen and (max-width: 495px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 472px;
                height: 650px;
        }

        @media screen and (max-width: 480px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 455px;
                height: 650px;
        }

        @media screen and (max-width: 470px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 445px;
                height: 650px;
        }

        @media screen and (max-width: 460px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 435px;
                height: 650px;
        }

        @media screen and (max-width: 445px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 425px;
                height: 650px;
        }

        @media screen and (max-width: 435px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 410px;
                height: 650px;
        }

        @media screen and (max-width: 420px){
                background-image: url(${img7});
                /* background-repeat: inherit; */

                width: 400px;
                height: 650px;
        }

        

        

       

`

export const DivTitleMenu = styled.div`
display: flex;
`
export const DivXcams = styled(Link)`
background-color: orange;
        color: white;
        font-size: 40px;
        margin-top: 18px;
        margin-left: 19px;
        width: 2.5em;
        text-decoration: none;
        border-radius: 8px;
        padding: 4px;

`
export const DivShow = styled.div`
background-color: rgba(204, 255, 0, 0.583);
        color: black;
        height: 15px;
        margin-top: 18px;
        margin-left: 19px;
        padding: 4px;
        border-radius: 4px;
`
export const DivMennu = styled.div`
background-color: rgba(230, 224, 224, 0.611);
        width: 1em;
        font-size: 30px;
        padding: 10px;
        margin: 20px;
        border-radius: 4px;
        color: black;
`
export const DivMennuDiv = styled.div`

&:hover{
        color: orange
}
`
export const DivOption = styled.div`
background-color: rgba(230, 224, 224, 0.611);
        width: 5.5em;
        font-size: 20px;
        padding: 7px;
        margin: 20px;
        border-radius: 4px;
        top: 1px;
        right: 1px;
        position: absolute;
        display: flex;
`
export const DivOptionDiv = styled.div`
margin: 4px;
        color: black;
`
export const DivStart = styled.div`

`
export const Divdiv = styled.div`

`
export const DivInfo = styled.div`
background-color: rgba(230, 224, 224, 0.611);
        width: 15.5em;
        font-size: 20px;
        padding: 7px;
        margin: 20px;
        border-radius: 4px;
        top: 120px;
        right: 1px;
        position: absolute;

        @media screen and (max-width:626px){
                display: none;
        }

        
`


export const DivIconInfo = styled.div`
display: flex;
`
export const DivIconInfoLetter = styled.div`

`
export const DivIconInfoLetterDiv = styled.div`

`
export const DivChattool = styled.div`
display: flex;
        margin-left: 90px;
`
export const DivChattoolDiv = styled.div`
margin-left: 8px;

&:hover{
        color: orange;
}
`
export const DivIdent = styled.div`
display: flex;
`
export const DivImage = styled.div`
background-color: rgba(13, 12, 12, 0.704);
       padding: 45px;
       width: 0.1em;
       border-radius: 95px;
       margin-right: 15px;
       margin-top: 15px;
       margin-bottom: 15px;
`
export const DivImgLetter = styled.div`
color: black;
        font-size: 15px;
        margin-top: 15px;
`
export const DivLetter = styled.div`
font-size: 15px;
`
export const DivImgList = styled.div`
display: flex;
`
export const DivImgListDiv = styled.div`
 background-color: rgba(13, 12, 12, 0.704);
       padding: 45px;
       width: 0.1em;
       margin-right: 15px;
       margin-top: 15px;
       margin-bottom: 15px;
`
export const DivAction = styled.div`
display: flex;
        height: 75px;
        
`
export const DivPrivate1 = styled.div`
background-color: rgba(255, 166, 0, 0.578);
padding: 12px;
margin: 4px;
`

export const DivPrivate1Div = styled.div`

`
export const DivVip = styled.div`
background-color: rgba(132, 88, 5, 0.673);
padding: 12px;
margin: 4px;
`

export const DivVipDiv = styled.div`

`
export const DivFoot = styled.div`
background-color: black;
        /* position: absolute; */
        top: 600px;
        width: 1000px;
        height: 100px;
        margin-top: 250px;
        text-align: center;
        /* border: solid 1px white; */
        color: white;
        @media screen and (max-width: 1115px){
                width: 1095px;
        }

        @media screen and (max-width: 1080px){
                width: 1060px;
        }

        @media screen and (max-width: 1066px){
                width: 1045px;
        }

        @media screen and (max-width: 1050px){
                width: 1030px;
        }

        @media screen and (max-width: 1040px){
                width: 1015px;
        }

        @media screen and (max-width: 1025px){
                width: 1000px;
        }

        @media screen and (max-width: 1015px){
                width: 990px;
        }

        @media screen and (max-width: 1000px){
                width: 970px;
        }

        @media screen and (max-width: 983px){
                width: 955px;
        }

        @media screen and (max-width: 970px){
                width: 940px;
        }

        @media screen and (max-width: 955px){
                width: 930px;
        }

        @media screen and (max-width: 943px){
                width: 915px;
        }

        @media screen and (max-width: 927px){
                width: 900px;
        }

        @media screen and (max-width: 913px){
                width: 890px;
        }

        @media screen and (max-width: 903px){
                width: 880px;
        }

        @media screen and (max-width: 895px){
                width: 860px;
        }

        @media screen and (max-width: 875px){
                width: 840px;
        }

        @media screen and (max-width: 855px){
                width: 820px;
        }

        @media screen and (max-width: 835px){
                width: 800px;
        }

        @media screen and (max-width: 810px){
                width: 780px;
        }

        @media screen and (max-width: 795px){
                width: 760px;
        }

        @media screen and (max-width: 775px){
                width: 740px;
        }

        @media screen and (max-width: 755px){
                width: 700px;
        }

        @media screen and (max-width: 715px){
                width: 680px;
        }

        @media screen and (max-width: 695px){
                width: 660px;
        }

        @media screen and (max-width: 675px){
                width: 640px;
        }

        @media screen and (max-width: 655px){
                width: 620px;
        }

        @media screen and (max-width: 635px){
                width: 600px;
        }

        @media screen and (max-width: 565px){
               
               width: 550px;
       }

        @media screen and (max-width: 555px){
               
               width: 530px;
       }

       @media screen and (max-width: 545px){
               
               width: 520px;
       }

       @media screen and (max-width: 535px){
               
               width: 510px;
       }

       @media screen and (max-width: 525px){
               
               width: 500px;
       }

       @media screen and (max-width: 515px){
               
               width: 490px;
       }

       @media screen and (max-width: 505px){
               
               width: 480px;
       }

       @media screen and (max-width: 495px){
               
               width: 470px;
       }

       @media screen and (max-width: 485px){
               
               width: 460px;
       }

        

        @media screen and (max-width: 460px){
                width: 430px;
                margin-left: 1px;
                font-size: 10px;
        }

        @media screen and (max-width: 446px){
                width: 410px;
                
        }

        @media screen and (max-width: 405px){
                width: 380px;
                
        }

        @media screen and (max-width: 395px){
                width: 370px;
                
        }

        
`


export const DivFootDiv = styled.div`
width: 1335px;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
        color: white;
        padding: 5px;
        /* border: solid 1px white; */

        @media screen and (max-width: 1115px){
                width: 700px;
        }

        @media screen and (max-width: 1044px){
                width: 650px;
        }

        @media screen and (max-width: 955px){
                width: 600px;
                /* margin: auto; */
        }

        

        @media screen and (max-width: 955px){
                width: 600px;
                margin: auto;
        }

        @media screen and (max-width: 635px){
                font-size: 19px;
        }

        @media screen and (max-width: 620px){
                font-size: 18px;
        }

        @media screen and (max-width: 620px){
                font-size: 17px;
                width: 500px;
        }

        @media screen and (max-width: 575px){
                font-size: 14px;
                width: 475px;
        }


        @media screen and (max-width: 555px){
                font-size: 14px;
                width: 465px;
        }

        @media screen and (max-width: 485px){
               
               width: 460px;
       }

       @media screen and (max-width: 475px){
               
               width: 440px;
       }

       @media screen and (max-width: 465px){
               
               width: 380px;
       }


        @media screen and (max-width: 460px){
                
                font-size: 15px;
                padding: 1px;
                width: auto;
        }

        @media screen and (max-width: 425px){
                
                
                width: 360px;
        }


`

export const NavMenu = styled.ul`
    display: none;
    align-items: center;
    list-style: none;
    text-align: center;
    color: white;


    @media screen and (max-width: 626px) {
        display: block;
        flex-direction: column;
        
        position: absolute;
        /* border: solid 1px white; */
        z-index: 10;
        
        top: 10px;
        right: ${({click}) => (click ? '0%' : '100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const DivInfoMobile = styled.div`
/* display: none; */
background-color: rgba(230, 224, 224, 0.611);
        width: 15.5em;
        font-size: 20px;
        padding: 0px;
        margin: 0px;
        border-radius: 4px;
        top: 120px;
        right: 7px;
        position: absolute;

        
`;


export const MobileIcon = styled.div`
    display: none;
    color: aliceblue;
    @media screen and (max-width: 626px) {
        display: block;
        position: absolute;
        top: 70px;
        right: 1px;
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

export const DivFootDivPrivate2 = styled.div`
    background-color: orange;
    width: 5em;
    color: black;
    margin: auto;
`;