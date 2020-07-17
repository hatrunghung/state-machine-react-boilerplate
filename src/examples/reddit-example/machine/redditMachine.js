import { Machine, assign } from 'xstate'
import { invokeFetchSubreddit } from './redditInvoke'

export const redditMachine = Machine({
  id: 'reddit',
  initial: 'idle',
  context: {
    subreddit: null, // none selected
    posts: null
  },
  states: {
    idle: {},
    selected: {
      initial: 'loading',
      states: {
        loading: {
          invoke: {
            id: 'fetch-subreddit',
            src: invokeFetchSubreddit,
            onDone: {
              type: 'loaded',
              actions: assign({
                posts: (context, event) => event.data
              })
            },
            onError: 'failure'
          }
        },
        loaded: {},
        failure: {}
      }
    }
  },
  on: {
    SELECT: {
      target: '.selected', // relative state targets -> reddit.selected
      actions: assign({
        subreddit: (context, event) => event.name
      })
    }
  }
})