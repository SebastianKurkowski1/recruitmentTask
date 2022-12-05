import ProfileContainer from './ProfileContainer'
import ProfileData from './ProfileData'
import ProfilePicture from './ProfilePicture'
import FetchButton from './FetchButton'
import { ReactNode, useEffect, useRef, useState } from 'react'
import fetchPerson from '../../../utilities/fetchPerson'
import { PersonInterface } from '../../../interfaces/PersonInterface'
import getProfilePictureURL from '../../../utilities/fetchProfilePicture'
import styled from 'styled-components'

interface Props {
  personData: PersonInterface | undefined
  personCounter: number
  setPersonData: (profileData: number | null) => void
  handlePersonCounter: () => void
  handleStarWarsData: (profileData: number | null) => void
}

const ProfileInnerContainer = styled('div')`
  padding: 140px 122px 0 144px;
  @media only screen and (max-width: 1000px) {
    padding: 20px;
  }
`

export default function Profile (props: Props): ReactNode {
  const dataFetchedRef = useRef(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleClick = async (): Promise<void> => {
    const profileData = await fetchPerson(props.personCounter)
    props.setPersonData(profileData)
    props.handlePersonCounter()
    props.handleStarWarsData(profileData)
    await fetchAndSetImageUrl()
  }

  const fetchAndSetImageUrl = async (): Promise<void> => {
    const pictureURL = await getProfilePictureURL('https://picsum.photos/534/383')
    setImageUrl(pictureURL)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    void handleClick().then(r => r)
  }, [])

  return (
        <div>
            <ProfileContainer>
                <ProfileInnerContainer>
                    <ProfilePicture imageUrl={imageUrl} />
                    <ProfileData
                        eyeColor={props.personData?.eye_color}
                        name={props.personData?.name}
                        birthYear={props.personData?.birth_year} />
                </ProfileInnerContainer>
            </ProfileContainer>
            <FetchButton onClick={handleClick} text={'next profiles'}/>
        </div>
  )
}
