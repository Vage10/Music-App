import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shahzamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '8a24736bddmsh79bdeddc62e6a50p1c86f2jsn0471e0c999d5',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({ query: ({ songid }) => /tracks/details?track_id=${songid} }),
    getSongRelated: builder.query({ query: ({ songid }) => /tracks/related?track_id=${songid} }),
    getArtistDetails: builder.query({ query: (artistId) => /artists/details?artist_id=${artistId} }),
    getSongsByGenre: builder.query({ query: (genre) => /charts/genre-world?genre_code=${genre} }),
    getSongsByCountry: builder.query({ query: (countryCode) => /charts/country?country_code=${countryCode} }),
    getSongsBySearch: builder.query({ query: (searchTerm) => /search/multi?search_type=SONGS_ARTISTS&query=${searchTerm} }),
  }),
});
export const { useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery } = shahzamCoreApi;