import { Routes, Route, Navigate } from 'react-router-dom';
import AllProfiles from './pages/AllProfiles';
import Auth from './pages/Auth';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CreateProfile from './pages/CreateProfile';
import URL from './url';
import Profile from './pages/Profile';
// import Profile from './pages/Profile';
// import AuthPage from './pages/AuthPage';
// import CreateProfile from './pages/CreateProfile';

function App() {
  const [loginData, setLoginData] = useState(null);
  const [userData, setUserData] = useState(null);

  const [profiles, setProfiles] = useState([]);

  async function getAllProfiles() {
    try {
      const response = await fetch(URL + '/profiles');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProfiles(data);

    } catch (error) {
      console.error('Failed to fetch profiles:', error);
      return [];
    }
  }

  useEffect(() => {
    getAllProfiles()
  }, [])

  return loginData?.id ? (
    <>
      <Header />
      <div className="p-4">
        <Routes>
          <Route index element={<AllProfiles profiles={profiles} />} />
          <Route
            path="create"
            element={
              <CreateProfile
                loginData={loginData}
                getAllProfiles={getAllProfiles}
                setUserData={setProfiles}
              />
            }
          />
          <Route
            path="profile/:id"
            element={
              <Profile
                loginData={loginData}
              />
            }
          />
          <Route path="*" element={<Navigate to="." />} />
        </Routes>
      </div>
    </>
  ) : (
    <Routes>
      <Route path="*" element={<Auth setLoginData={setLoginData} />} />
    </Routes>
  );
}

export default App;