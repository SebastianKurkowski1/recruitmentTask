import styled from 'styled-components'
import { ReactNode } from 'react'

const Container = styled('div')`
  display: flex;
  flex-flow: column;
`

const Name = styled('span')`
  font-family: 'Inter', sans-serif;
  font-size: 50px;
  line-height: 60.5px;
  font-weight: 800;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: 25px;
    line-height: 30px;
  }
`

const SvgContainer = styled('div')`
  display: flex;
  align-items: start;
`

const DataLabel = styled('div')`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-style: italic;
  font-weight: 100;
  min-width: 90px;
`

const AgeAndEyeColorDataContainer = styled('div')`
  max-width: 368px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

interface Props {
  name: string | undefined
  birthYear: string | undefined
  eyeColor: string | undefined
}

export default function ProfileData (props: Props): ReactNode {
  return (
        <Container>
            <div style={{ display: 'flex', marginTop: '26px' }}>
                <Name>{typeof props.name !== 'undefined' ? props.name : 'Nie znaleziono'}</Name>
                <SvgContainer>
                    <img style={{ marginRight: '14px' }}
                         src={require('../../../assets/images/svg/humanSvg.svg').default}
                         alt={'human'}/>

                    <img src={require('../../../assets/images/svg/checkmarkSvg.svg').default}
                         alt={'checkmark'}/>
                </SvgContainer>
            </div>
            <AgeAndEyeColorDataContainer>
                <div style={{ display: 'flex' }}>
                    <DataLabel>birth year:</DataLabel>
                    <div style={{
                      fontSize: '20px',
                      marginLeft: '5px'
                    }}>{typeof props.birthYear !== 'undefined' ? props.birthYear : 'Nie znaleziono'}</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <DataLabel>eye color:</DataLabel>
                    <div style={{
                      fontSize: '20px',
                      marginLeft: '5px'
                    }}>{typeof props.eyeColor !== 'undefined' ? props.eyeColor : 'Nie znaleziono'}</div>
                </div>
            </AgeAndEyeColorDataContainer>
        </Container>
  )
}
