import { getGif } from "../../helpers/getGifs"

describe('Prueba con getGifs Fetch', () => {

  test('debe de traer 10 elementos', async () => {
    const gifs = await getGif('Naruto')
    expect(gifs.length).toBe(10)
  })

  test('should ', async () => {
    const gifs = await getGif('')

    expect(gifs.length).toBe(0)
  })


})
