import { findLastIndex } from 'lodash'
import styled from 'styled-components'

export const AppContainer = styled.div`
height: 37vh;
display: flex;
justify-content: center;
padding: 300px;
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.color};
transition : background-colot 0.8s linear, 0.5s linear;
`

export const MainSection = styled.div`
text-align: center;
`


