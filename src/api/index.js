function sleep (time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

export async function getCrewList () {
  // Simulate DB access
  await sleep(800)
  return [
    {
      firstname: 'James',
      lastname: 'Holden'
    },
    {
      firstname: 'Naomi',
      lastname: 'Nagata'
    }
  ]
}

export async function getSolarSystemStatus () {
  // Simulate DB access
  await sleep(1000)
  return 'WAR'
}
