// useFavoriteStore.js
import { create } from 'zustand';

export const useFavoriteStore = create((set) => ({
  favorites: [],
  addFavorite: (event) => set((state) => {
    if (!state.favorites.some(fav => fav.id === event.id)) {
      return { favorites: [...state.favorites, event] };
    }
    return state;
  }),
  removeFavorite: (eventId) => set((state) => ({
    favorites: state.favorites.filter(fav => fav.id !== eventId)
  })),
}));
