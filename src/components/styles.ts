import styled from 'styled-components'

export const Container = styled.section`
  padding: 3rem;
  display: grid;
  justify-items: center;
  max-width: 1080px;
  margin: 0 auto;
`
export const Header = styled.div`
  background: #0A3756;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 57% 100%, 45% 78%, 0 76%);
  color: white;
  padding: 0 2rem;
  width: 100%;

  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: 60% auto;
`

export const UserAmount = styled.div`

  p {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .9rem;
  }

  div {
    display: flex;
  }

  input {
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    padding: 1rem;
    height: 3rem;
  
    color: white;
    outline: none;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  button {
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 3rem;
    padding: 0 1.5rem;
    margin-left: 1rem;
    cursor: pointer;
    
    :hover {
      background: white;
      border: 1px solid white;
      color: #0A3756;
    }
  }

  label {
    cursor: pointer;
  
    :hover span{
      text-decoration: underline;
    }
  
    input {
      height: 0;
    }
  }
`