import NameOfAuthor from "./NameOfAuthor";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import FormButton from "./RegisterButton";
import Profile from "./Profile/Profile";
import {useCustomTitle} from "../../hooks/use-custom-title.hook";
import Register from "./Register/Register";
import {useState} from "react";
import {PersonInterface} from "../../interfaces/PersonInterface";
import {StarWarsDataType} from "../../types/StarWarsDataType";
import styled from "styled-components";

const ProfileContainer = styled('div')`
  margin: 132px auto 0 auto;
  display: flex;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`

const HeaderWrapper = styled(`div`)`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`

export default function Main() {
    useCustomTitle('Strona główna')
    const [personData, setPersonData] = useState<PersonInterface>();
    const [personCounter, setPersonCounter] = useState(1);
    const [star_wars_data, setStarWarsData] = useState<StarWarsDataType>([]);

    function handlePersonCounter() {
        setPersonCounter(personCounter + 1);
    }

    function handleStarWarsData(data: PersonInterface) {
        setStarWarsData(prevState => ([...prevState, {
            name: data.name,
            created: data.created,
            vehicles: data.vehicles,
        }]));
    }

    return (
        <MainWrapper>
            <HeaderWrapper>
                <NameOfAuthor nameOfAuthor={'Sebastian Kurkowski'}/>
                <FormButton text={'formularz rejestracyjny'} scrollToId={'formContainer'}/>
            </HeaderWrapper>
            <ProfileContainer>
                <Profile
                    handlePersonCounter={handlePersonCounter}
                    personCounter={personCounter}
                    personData={personData}
                    setPersonData={setPersonData}
                    handleStarWarsData={handleStarWarsData}
                />
            </ProfileContainer>
            <div style={{marginTop: '100px', minHeight: '100vh'}} id={'formContainer'}>
                <Register star_wars_data={star_wars_data}/>
            </div>
        </MainWrapper>
    )
}