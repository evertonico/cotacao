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