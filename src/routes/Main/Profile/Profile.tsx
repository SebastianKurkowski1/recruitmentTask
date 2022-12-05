import ProfileContainer from "./ProfileContainer";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";
import FetchButton from "./FetchButton";
import {useEffect, useRef, useState} from "react";
import fetchPerson from "../../../utilities/fetchPerson";
import {PersonInterface} from "../../../interfaces/PersonInterface";
import getProfilePictureURL from "../../../utilities/fetchProfilePicture";

interface Props {
    personData: PersonInterface | undefined,
    personCounter: number,
    setPersonData: (profileData: PersonInterface) => void,
    handlePersonCounter: () => void,
    handleStarWarsData: (profileData: PersonInterface) => void,
}

export default function Profile(props: Props) {
    const dataFetchedRef = useRef(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleClick = async () => {
        const profileData = await fetchPerson(props.personCounter);
        props.setPersonData(profileData)
        props.handlePersonCounter();
        props.handleStarWarsData(profileData);
        await fetchAndSetImageUrl();
    }

    const fetchAndSetImageUrl = async () => {
        const pictureURL = await getProfilePictureURL('https://picsum.photos/534/383');
        setImageUrl(pictureURL);
    }
    
    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        handleClick();
    },[])

    return (
        <div>
            <ProfileContainer>
                <div style={{padding: '140px 122px 0 144px'}}>
                    <ProfilePicture imageUrl={imageUrl} />
                    <ProfileData
                        eyeColor={props.personData?.eye_color}
                        name={props.personData?.name}
                        birthYear={props.personData?.birth_year} />
                </div>
            </ProfileContainer>
            <FetchButton onClick={handleClick} text={'next profiles'}/>
        </div>
    )
}