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
    "../src/assets/backgroundimage1.webp",
    "../src/assets/backgroundimage2.webp",
    "../src/assets/backgroundimage3.webp",
    "../src/assets/backgroundimage4.webp",
    "../src/assets/backgroundimage5.webp",
    "../src/assets/backgroundimage6.webp",
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
