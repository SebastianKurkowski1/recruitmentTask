export default async function getProfilePictureURL(url: string) {
    const response = await fetch(url);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
}

