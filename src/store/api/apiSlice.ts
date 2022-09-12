import { gameStateType, preGameTypes, stateType } from '@models/alias.model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getSocket } from '@services/webSocket/webSocket'
import SocketData from '@models/aliasSocket.model'

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.gslayers.ru/alias' }),

  endpoints: builder => ({
    isLoggedIn: builder.query<{ isLoggedIn: boolean }, void>({
      query: () => '/isloggedIn',
    }),

    JoinLobby: builder.mutation<
      { success: boolean },
      { name: string; lobbyId: string }
    >({
      query: data => ({
        url: '/join',
        method: 'POST',
        body: data,
      }),
    }),

    createLobby: builder.mutation<void, string>({
      query: name => ({
        url: '/create',
        method: 'POST',
        body: name,
      }),
    }),

    getPreGameData: builder.query<preGameTypes, void>({
      query: () => `/getPreGameData`,

      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = getSocket()
        try {
          await cacheDataLoaded
          const listener = (msg: Partial<preGameTypes>) => {
            updateCachedData(draft => {
              Object.keys(msg).map((i: keyof preGameTypes) => {
                draft[i] = msg[i]
              })
            })
          }
          ws.on('msg', listener)
        } catch (e) {}
        await cacheEntryRemoved
        ws.close()
      },
    }),

    sendData: builder.mutation<void, { type: string; payload: any }>({
      queryFn: data => {
        const ws = getSocket()
        ws.emit(data.type, data.payload)
        return undefined
      },
    }),
  }),
})

export const {
  useGetPreGameDataQuery,
  useSendDataMutation,
  useIsLoggedInQuery,
  useJoinLobbyMutation,
  useCreateLobbyMutation,
} = apiSlice
