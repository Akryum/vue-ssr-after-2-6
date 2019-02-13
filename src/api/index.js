function sleep (time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

const crew = [
  {
    id: 'a',
    firstname: 'James',
    lastname: 'Holden'
  },
  {
    id: 'b',
    firstname: 'Naomi',
    lastname: 'Nagata'
  }
]

export async function getCrewList () {
  console.log(`Sending request getCrewList...`)
  // Simulate DB access
  await sleep(800)
  return crew
}

export async function getCrewDetails (id) {
  console.log(`Sending request getCrewDetails('${id}')...`)
  // Simulate DB access
  await sleep(700)
  return crew.find(m => m.id === id)
}

export async function getSolarSystemStatus () {
  console.log(`Sending request getSolarSystemStatus...`)
  // Simulate DB access
  await sleep(1000)
  return 'WAR'
}
