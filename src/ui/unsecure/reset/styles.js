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

export const Content = styled('div')`
  grid-area: page;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  padding: 30px 40px;
  * {
    margin-right: auto;
    margin-left: auto;
  }
`
export const Title = styled('div')`
  font-size: 28px;
  margin-bottom: 20px;
  align-self: center;
`

export const Description = styled('div')`
  font-size: 12px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  * {
    text-align: center;
  }
`