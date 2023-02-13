import {css} from 'styled-components'

export const tablet =(props)=>{
    return css `
    @media (max-width:992px){
        ${props}
    }
    `
}
export const BigMobile =(props)=>{
    return css `
    @media (max-width:600px){
        ${props}
    }
    `
}