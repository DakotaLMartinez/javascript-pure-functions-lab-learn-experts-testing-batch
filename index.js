const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

const getNextEpisodeInPlaylist = (episodes) => {
  return episodes[0];
}

const addToPlaylist = (episodes, episode) => {
  let updatedPlaylist = JSON.parse(JSON.stringify(episodes))
  updatedPlaylist.push(episode)
  return updatedPlaylist
}

const removeFromPlaylist = (episodes, episode) => {
  let updatedPlaylist = JSON.parse(JSON.stringify(episodes))
  let index =  updatedPlaylist.findIndex(function(element){
    return element.id === episode.id
  })
  updatedPlaylist.splice(index, 1)
  return updatedPlaylist
}

function bingeWatch(playlist) {
  let nextEpisode = getNextEpisodeInPlaylist(playlist)
  if (nextEpisode) {
    let updatedPlaylist = removeFromPlaylist(playlist, nextEpisode)
    bingeWatch(updatedPlaylist)
  } 
  return 'Please let there be more!'
}

console.log(bingeWatch(episodes));