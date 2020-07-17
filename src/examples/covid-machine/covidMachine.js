import { Machine, assign } from 'xstate'
import { fetchCovidStat } from './covidInvoke'

export const covidMachine = Machine({
  id: 'covid',
  initial: 'loading',
  context: {
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    lastUpdated: null
  },
  states: {
    loading: {
      invoke: {
        id: 'invoke-covid-stat',
        src: fetchCovidStat,
        onDone: {
          target: 'loaded',
          actions: assign({
            confirmed: (context, event) => {
              console.log('event', event)
              return event.data.confirmed.value
            },
            lastUpdated: () => Date.now()
          })
        },
        onError: 'failure'
      }
    },
    loaded: {
      on: {
        REFRESH: 'loading'
      }
    },
    failure: {
      on: {
        RETRY: 'loading'
      }
    }
  }
})