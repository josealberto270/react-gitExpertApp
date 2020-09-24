export const getGif = async ( categoria ) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=cavs4vz9nHwCzzNOMw90nYYVgC7zUm7q&limit=10&q=${encodeURI(categoria)}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  return (gifs)
}