export default async function getProfilePictureURL (url: string): Promise<string> {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}
