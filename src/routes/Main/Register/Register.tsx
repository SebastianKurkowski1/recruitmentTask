import styled from 'styled-components'
import Form from './Form/Form'
import { StarWarsDataType } from '../../../types/StarWarsDataType'
import { ReactNode } from 'react'

const FormContainer = styled('div')`
  margin: 101px 174px 0 203px;
  font-size: 20px;
  line-height: 33px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  @media only screen and (max-width: 1000px) {
    margin: 15px;
  }
`

const FormTitle = styled('span')`
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  &:after {
    content: '';
    max-width: 166px;
    width: 100%;
    height: 9px;
    background-color: #071594;
    position: absolute;
    bottom: -30px;
  }
`

interface Props {
  star_wars_data: StarWarsDataType
}

export default function Register (props: Props): ReactNode {
  return (
        <FormContainer>
            <FormTitle>FORMULARZ REJESTRACYJNY</FormTitle>
            <Form star_wars_data={props.star_wars_data}/>
        </FormContainer>
  )
}
