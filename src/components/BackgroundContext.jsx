/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

// Assuming you have a function to dynamically import images
// This is a placeholder function, replace it with your actual implementation
const importImage = async (imagePath) => {
 const module = await import(imagePath);
 return module.default;
};

const BackgroundContext = createContext();

export const useBackground = () => {
 const context = useContext(BackgroundContext);
 if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
 }
 return context;
};

export const BackgroundProvider = ({ children }) => {
 const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
 const [photos, setPhotos] = useState([]);
 const [currentPath, setCurrentPath] = useState('/');

 useEffect(() => {
    // Load images dynamically
    const loadImages = async () => {
      const imagePaths = [
        'public/assets/backgroundimage1.webp',
        'public/assets/backgroundimage2.webp',
        'public/assets/backgroundimage3.webp',
        'public/assets/backgroundimage4.webp',
        'public/assets/backgroundimage5.webp',
        'public/assets/backgroundimage6.webp',
      ];
      const loadedImages = await Promise.all(imagePaths.map(path => importImage(process.env.PUBLIC_URL + path)));
      setPhotos(loadedImages);
    };

    loadImages();
 }, []);

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
