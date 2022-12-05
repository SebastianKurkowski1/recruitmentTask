import styled from "styled-components";

const Button = styled('button')`
  border: none;
  max-width: 224px;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  background-color: #35660E;
  border-radius: 20px;
  color: #FFFFFF;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  padding: 10px 31px;
  white-space: nowrap;
  cursor: pointer;
  -webkit-text-stroke: 1px #D9D9D9;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-style: italic;
  margin: 30px auto auto auto;
  display: block;
  &:hover {
    background-color: #428012;
  }
`

interface Props {
    onClick: () => void,
    text: string,
}

export default function FetchButton(props: Props) {
    return (
        <Button onClick={props.onClick}>
            {props.text}
        </Button>
    )
}