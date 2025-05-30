export async function getAllProfiles() {
  try {
    const response = await fetch(URL + 'profiles');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // return profiles;
    setProfiles(data);

  } catch (error) {
    console.error('Failed to fetch profiles:', error);
    return [];
  }
}