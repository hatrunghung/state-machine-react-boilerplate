import client from '../../utils/client'

export function fetchCovidStat(context) {
  const { confirmed, deaths, recovered } = context

  return client('https://covid19.mathdro.id/api').then(data => {
    console.log(data)
    return data
  })
}
