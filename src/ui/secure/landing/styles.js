import styled from 'styled-components'

export const Page = styled('div')`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 30% 1fr 30%;
  grid-template-areas:
    ". . ."
    ". page ."
    ". . .";
  background-color: #f4f4f4;
`
export const Sidenav = styled('div')`
height: auto;
width: 250px;
display: flex;
flex: 0 1 auto;
background-color: dodgerblue;
flex-shrink: 0;
overflow-y: auto;
text-color: black;
box-shadow: 0px -5px 10px 0px rgba(0,0,0,0.1);  
`