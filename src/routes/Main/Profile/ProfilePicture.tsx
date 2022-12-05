import styled from "styled-components";

const Container = styled('div')`
  max-width: 534px;
  width: 100%;
  border-radius: 200px 20px 100px 50px;
  overflow: hidden;
`
interface Props {
    imageUrl: string,
}

export default function ProfilePicture(props: Props) {

    return (
        <Container>
           <img src={props.imageUrl}  alt={'test'}/>
        </Container>
    )
}