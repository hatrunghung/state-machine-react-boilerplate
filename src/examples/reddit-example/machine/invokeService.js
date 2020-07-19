import client from '../../../utils/client'

export function invokeFetchSubreddit(subreddit) {
  // const { subreddit } = context

  return client(`https://www.reddit.com/r/${subreddit}.json`)
    .then(json => json.data.children.map(child => child.data))
}