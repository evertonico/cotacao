import styled from 'styled-components'

export const ContainerList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  padding: 2rem 0;
  margin: 0;

  li {
    border: 1px solid #0A3756;
    padding: .3rem 0;

    font-weight: bold;
    font-family: sans-serif;
    font-size: .9rem;

    display: grid;
    grid-gap: .5rem;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: .5rem 1rem;
    cursor: pointer;
    border-radius: 10px;

    :hover {
      background: #0A3756;
      color: white;

      h6 {
        color: white;
      }
    }

    * {
      margin: 0;
    }

    p {
      grid-column: 1/3;
    }

    h6 {
      font-weight: bold;
      font-size: 1.2rem;
      color: #0A3756;
    }
  }
`