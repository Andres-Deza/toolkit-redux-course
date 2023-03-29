import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlices';
import { pokemonSlices } from './slices/pokemon/pokemonSlices';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		pokemons: pokemonSlices.reducer,
	},
});
