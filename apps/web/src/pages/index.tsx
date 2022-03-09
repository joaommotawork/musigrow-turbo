import { Button } from 'ui';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { decrement, increment } from '../features/counter/counterSlice';
import { useGetPokemonByNameQuery } from '../services/pokemon';
import useTranslation from 'next-translate/useTranslation';

export default function Web() {
	const { t, lang } = useTranslation('common');
	const example = t('variable-example', { count: 42 });

	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	// Using a query hook automatically fetches data and returns query values
	const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
	// Individual hooks are also accessible under the generated endpoints:
	// const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

	return (
		<div>
			<h1>Web</h1>
			<Button label='test' />
			<div>
				<button aria-label='Increment value' onClick={() => dispatch(increment())}>
					Increment
				</button>
				<span>{count}</span>
				<button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<h3>{data.species.name}</h3>
					<img src={data.sprites.front_shiny} alt={data.species.name} />
				</>
			) : null}
			<div>{example}</div>
		</div>
	);
}
