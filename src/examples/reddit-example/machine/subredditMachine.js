import { Machine, assign } from 'xstate'
import { invokeFetchSubreddit } from './redditInvoke'

export const createSubredditMachine = subreddit => Machine({
  id: 'subreddit',
  initial: 'loading',
  context: {
    subreddit, // none selected
    posts: null,
    lastUpdated: null
  },
  states: {
    loading: {
      invoke: {
        id: 'fetch-subreddit',
        src: invokeFetchSubreddit,
        onDone: {
          type: 'loaded',
          actions: assign({
            posts: (context, event) => event.data,
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