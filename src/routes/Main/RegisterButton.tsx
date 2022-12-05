import styled from 'styled-components'
import { ReactNode } from 'react'

const Button = styled('button')`
  background-color: #40483A;
  color: #FFFFFF;
  font-size: 30px;
  max-width: 236px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  font-style: italic;
  -webkit-text-stroke: 1px #D9D9D9;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 10.5px 0;
  border: none;

  &:hover {
    background-color: #63735c;
  }
`
interface Props {
  text: string
  scrollToId: string
}

export default function RegisterButton (props: Props): ReactNode {
  const handleOnClick = (): void => {
    document.getElementById(props.scrollToId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <Button onClick={handleOnClick}>{props.text}</Button>
  )
}
