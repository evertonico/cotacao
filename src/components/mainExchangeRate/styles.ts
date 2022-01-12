import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  padding: 1rem;
  grid-gap: 1rem;
`

export const Row = styled.article`
  border: 1px solid white;
  border-radius: 2px;
  color: white;
  padding: .5rem 0 .5rem;
  line-height: 1.8rem;
  font-family: sans-serif;
  cursor: pointer;

  display: grid;
  grid-template-columns: 20% auto;
  
  :hover {
    background: rgba(255,255,255,.08)
  }

  h3, h2 {
    margin: 0;
  }
`
