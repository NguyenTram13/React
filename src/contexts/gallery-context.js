import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );

  console.log(storedValue);
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);
  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photos) => {
      if (photos.id === photoId) {
        return {
          ...photos,
          isFavorite: !photos.isFavorite,
        };
      }
      return photos;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }

  function addToCart(newItem) {
    setCartItems((prevItem) => {
      const isExitsed = prevItem.some((item) => item.id === newItem.id);
      console.log(isExitsed);
      if (isExitsed) {
        setStoredCart([...prevItem]);
        return [...prevItem];
      }
      setStoredCart([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  }

  function removeFromCart(photoId) {
    setCartItems((prevItem) => {
      const result = prevItem.filter((item) => item.id !== photoId);
      setStoredCart(result);
      return result;
    });
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setFavoriteList,
    setCartItems,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  // console.log(value);
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}
function useGallery() {
  const context = useContext(GalleryContext);
  // console.log(context);
  if (typeof context === "undefined") {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}

export { GalleryProvider, useGallery };
