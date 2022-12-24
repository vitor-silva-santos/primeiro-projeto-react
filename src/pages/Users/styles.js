import styled from "styled-components";

// IMAGENS
import Fundo1 from "../../assets/fundo2.svg"
// END IMAGENS

export const Container = styled.div`
    background-image: url(${Fundo1});
    background-size:cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    width:100%;
    min-height: 100vh;
`
export const Img = styled.img`
    margin-top: 30px;
    /* width: 295px; */
`

export const Content = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
`

export const H1 = styled.h1`
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 80px;
`

export const Button = styled.button`
    margin-top: 15vh;
    background: transparent;
    border-radius: 14px;
    width: 300px;
    height: 74px;
    border: 1px solid white;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    cursor:pointer;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: 0.5;
        transform: scale(0.99);
        transition: .1s;
    }

    img {
        transform: rotateY(180deg)
    }
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 58px;
    width: 300px;
    outline:none;
    border: none;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-top: 20px;

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
`
