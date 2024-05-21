import {  fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const login = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/auth/" }),
  endpoints: (builder) => ({
    getLogin: builder.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLoginMutation } = login;
