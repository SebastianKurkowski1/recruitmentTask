import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  width: 100%;
  border-radius: 62.5% 7.5% 37.5% 12.5%;
  background: rgb(199,192,192);
  background: linear-gradient(90deg, rgba(199,192,192,1) 0%, rgba(210,203,203,1) 100%);
  filter: drop-shadow(12px 4px 4px rgba(0, 0, 0, 0.6));
  padding-bottom: 20px;
  @media only screen and (max-width: 1000px) {
   width: 90%;
    margin: 0 auto;
  }
`

export default function ProfileContainer (props: React.PropsWithChildren): ReactNode {
  return (
        <Container>
            {props.children}
        </Container>
  )
}
