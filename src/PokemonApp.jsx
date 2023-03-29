import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
	const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />
			<span>Loading:{!isLoading ? 'False' : 'True'}</span>
			<ul>
				{pokemons.map((p) => (
					<li key={p.name}>{p.name}</li>
				))}
			</ul>
			<button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
				Next
			</button>
		</>
	);
};
