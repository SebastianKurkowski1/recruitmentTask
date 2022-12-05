import MainWrapper from "../../components/MainWrapper/MainWrapper";

export default function ErrorPage() {
    return (
        <MainWrapper>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
                <span style={{fontSize: '40px', fontWeight: 'bold'}}>Nie znaleziono ścieżki :(</span>
            </div>
        </MainWrapper>
    )
}