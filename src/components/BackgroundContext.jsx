/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const BackgroundContext = createContext();

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const BackgroundProvider = ({ children }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [
    "/public/assets/backgroundimage1.webp",
    "/public/assets/backgroundimage2.webp",
    "/public/assets/backgroundimage3.webp",
    "/public/assets/backgroundimage4.webp",
    "/public/assets/backgroundimage5.webp",
    "/public/assets/backgroundimage6.webp",
  ];
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Whenever the path changes, trigger a background change
    changeTheme();
  }, [currentPath]);

  const changeTheme = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * photos.length);
    } while (randomIndex === currentPhotoIndex || randomIndex === (currentPhotoIndex + 1) % photos.length);

    setCurrentPhotoIndex(randomIndex);
  };

  const contextValue = {
    currentPhotoIndex,
    photos,
    changeTheme,
    setCurrentPath, // Add setCurrentPath to update the currentPath
  };

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContext;
