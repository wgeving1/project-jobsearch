import styled from 'styled-components'

export const StyledButton = styled('div')`
  display: inline-block;
  :hover {
    .ui.basic.button{
      box-shadow: 0 0 0 2px rgba(43, 196, 123, .6) inset;
      color: #2bdf7a !important;
      background-color: #f9f9f9 !important;
    }
  }
  .ui.basic.button{
    border-radius: 16px;
    color: #2BC47B !important;
    box-shadow: 0 0 0 2px rgba(43, 196, 123, .6) inset;
  }
`