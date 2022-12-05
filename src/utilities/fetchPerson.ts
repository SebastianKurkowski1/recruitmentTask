export default async function fetchPerson(personNumber: number) {
    try {
        const response = await fetch(`https://swapi.py4e.com/api/people/${personNumber}`);
        return await response.json();
    }   catch (error) {
        return null;
    }
}