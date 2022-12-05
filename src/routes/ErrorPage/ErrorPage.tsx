import MainWrapper from '../../components/MainWrapper/MainWrapper'
import { ReactNode } from 'react'

export default function ErrorPage (): ReactNode {
  return (
        <MainWrapper>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <span style={{ fontSize: '40px', fontWeight: 'bold' }}>Nie znaleziono ścieżki :(</span>
            </div>
        </MainWrapper>
  )
}
