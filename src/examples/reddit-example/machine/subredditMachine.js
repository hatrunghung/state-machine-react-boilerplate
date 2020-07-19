import { Machine, assign } from 'xstate'
import { invokeFetchSubreddit } from './invokeService'

export const createSubredditMachine = subreddit => {
  return Machine({
    id: "subreddit",
    initial: "loading",
    context: {
      subreddit, // subreddit name passed in
      posts: null,
      lastUpdated: null
    },
    states: {
      loading: {
        invoke: {
          id: "fetch-subreddit",
          src: 'getSubreddit',
          onDone: {
            target: "loaded",
            actions: assign({
              posts: (context, event) => event.data,
              lastUpdated: () => Date.now()
            })
          },
          onError: "failure"
        }
      },
      loaded: {
        on: {
          REFRESH: "loading"
        }
      },
      failure: {
        on: {
          RETRY: "loading"
        }
      }
    }
  }, {
    services: {
      getSubreddit: (context, event) => invokeFetchSubreddit(context.subreddit)
    }
  });
};
