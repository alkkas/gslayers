import { stateType } from '@models/alias.model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getSocket } from '@services/webSocket/webSocket'

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.gslayers.ru' }),

  endpoints: builder => ({
    getLobbyData: builder.query<
      Partial<stateType>,
      { lobbyId: string | undefined; name: string }
    >({
      query: ({ lobbyId, name }) => `/?lobby=${lobbyId}&name=${name}`,
    }),

    sendData: builder.mutation<
      undefined,
      {
        lobbyId: string
        currentPlayer: string
        data: Partial<stateType>
      }
    >({
      queryFn: ({ lobbyId, currentPlayer, data }) => {
        const socket = getSocket(lobbyId, currentPlayer)
        const jsonData = JSON.stringify(data)
        socket.send(jsonData)
        return undefined
      },
    }),
  }),
})

export const { useGetLobbyDataQuery, useSendDataMutation } = apiSlice
