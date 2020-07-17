import React, { Fragment, useMemo } from 'react'
import { useMachine } from '@xstate/react'
import { createSubredditMachine } from './machine/subredditMachine'

export const Subreddit = ({ name }) => {
  const subredditMachine = useMemo(() => {
    return createSubredditMachine(name)
  }, [name])

  const [current, send] = useMachine(subredditMachine)

  if (current.matches('failure')) {
    return (
      <div>
        Failed to load posts. {' '}
        <button onClick={() => send('RETRY')}>Retry?</button>
      </div>
    )
  }

  const { subreddit, posts, lastUpdated } = current.context

  return (
    <section>
      {current.matches('loading') && <div>Loading posts...</div>}
      {posts && (
        <Fragment>
          <header>
            <h2>{subreddit}</h2>
            <small>
              Last Updated: {lastUpdated}{' '}
              <button onClick={() => send('REFRESH')}>Refresh</button>
            </small>
          </header>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </section>
  )
}