import React from 'react'
import { useMachine } from '@xstate/react'
import { redditMachine } from './machine/redditMachine'
import { Subreddit } from './Subreddit.app'

const subreddits = ['frontend', 'reactjs', 'vuejs']

export const RedditApp = () => {
  const [current, send] = useMachine(redditMachine)
  const { subreddit } = current.context

  return (
    <main>
      <header>
        <select
          onChange={e => {
            send('SELECT', { name: e.target.value })
          }}
        >
          {subreddits.map(subreddit => {
            return <option key={subreddit}>{subreddit}</option>
          })}
        </select>
      </header>
      {subreddit && <Subreddit name={subreddit} key={subreddit.id} />}
    </main>
  )
}