/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import backgroundimage1 from '/assets/backgroundimage1.webp';
import backgroundimage2 from '/assets/backgroundimage2.webp';
import backgroundimage3 from '/assets/backgroundimage3.webp';
import backgroundimage4 from '/assets/backgroundimage4.webp';
import backgroundimage5 from '/assets/backgroundimage5.webp';
import backgroundimage6 from '/assets/backgroundimage6.webp';

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
    backgroundimage1,
    backgroundimage2,
    backgroundimage3,
    backgroundimage4,
    backgroundimage5,
    backgroundimage6,
  ];
  const [currentPath, setCurrentPath] = useState(0); // Change the initial value to 0

  useEffect(() => {
    // Whenever the path changes, trigger a background change
    changeTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  const changeTheme = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * photos.length);
    } while (
      randomIndex === currentPhotoIndex ||
      randomIndex === (currentPhotoIndex + 1) % photos.length
    );

    setCurrentPhotoIndex(randomIndex);
  };

  const contextValue = {
    currentPhotoIndex,
    photos,
    changeTheme,
    setCurrentPath, // Modify to set the index directly
  };

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContext;
