import NameOfAuthor from "./NameOfAuthor";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import FormButton from "./RegisterButton";
import Profile from "./Profile/Profile";
import {useCustomTitle} from "../../hooks/use-custom-title.hook";
import Register from "./Register/Register";
import {useState} from "react";
import {PersonInterface} from "../../interfaces/PersonInterface";
import {StarWarsDataType} from "../../types/StarWarsDataType";


export default function Main() {
    useCustomTitle('Strona główna')
    const [personData, setPersonData] = useState<PersonInterface>();
    const [personCounter, setPersonCounter] = useState(1);
    const [star_wars_data, setStarWarsData] = useState<StarWarsDataType>([]);

    function handlePersonCounter() {
        setPersonCounter(personCounter + 1);
    }

    function handleStarWarsData(data: PersonInterface) {
        setStarWarsData(prevState => ([...prevState,{
            name: data.name,
            created: data.created,
            vehicles: data.vehicles,
        }]));
    }

    return (
        <MainWrapper>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <NameOfAuthor nameOfAuthor={'Sebastian Kurkowski'}/>
                <FormButton text={'formularz rejestracyjny'} scrollToId={'formContainer'}/>
            </div>
            <div style={{
                margin: '132px auto 0 auto',
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '800px',
                width: '100%'
            }}>
                <Profile
                handlePersonCounter={handlePersonCounter}
                personCounter={personCounter}
                personData={personData}
                setPersonData={setPersonData}
                handleStarWarsData={handleStarWarsData}
                />
            </div>
            <div style={{marginTop: '100px', minHeight: '100vh'}} id={'formContainer'}>
                <Register star_wars_data={star_wars_data}/>
            </div>
        </MainWrapper>
    )
}