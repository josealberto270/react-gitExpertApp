import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGif(categoria).then(imgs =>
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false
        })

      }, 3000)
    )
  }, [categoria])

  return state //data:[],loading:true
}
