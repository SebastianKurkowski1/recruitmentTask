import styled from 'styled-components'
import { ReactNode } from 'react'

const Container = styled('div')`
  max-width: 534px;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    margin: 40px 0 0 40px;
    display: flex;
    justify-content: center;
    max-width: 80%;
  }
`

const Image = styled('img')`
  border-radius: 37% 5% 18.5% 9%;
  max-width: 100%;
  @media only screen and (max-width: 1000px) {
    max-width: 80%;
  }
`
interface Props {
  imageUrl: string
}

export default function ProfilePicture (props: Props): ReactNode {
  return (
        <Container>
           <Image src={props.imageUrl} alt={'test'}/>
        </Container>
  )
}
