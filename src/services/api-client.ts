import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "02172ce5f99f4fdf9c5bd8e52147246a",
  },
})
