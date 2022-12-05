import styled from "styled-components";

const Header = styled('div')`
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  line-height: 30px;
`
export default function NameOfAuthor({nameOfAuthor}: {nameOfAuthor: string}) {
    return (
        <Header>
            {nameOfAuthor}
        </Header>
        )
}