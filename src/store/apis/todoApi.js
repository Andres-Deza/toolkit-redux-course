import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const todoApi = createApi({
	reducerPath: 'todos',

	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
		// path: '/todos',
		// method: 'GET',
		// headers: {
		// 	Accept: 'application/json',
		// 	'Content-Type': 'application/json',
		// },
		endpoins: (builder) => ({
			getTodos: builder.query({
				query: () => '/todos',
			}),
		}),
	}),
});

export const { useGetTodosQuery } = todoApi;
