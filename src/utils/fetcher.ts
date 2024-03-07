import axios from 'axios'

interface Response<D, M = undefined> {
  data: D
  meta: M
}

const fetcher = <D, M = undefined>(url: string): Promise<Response<D, M>> =>
  axios.get(url).then((res) => res.data)

export default fetcher
