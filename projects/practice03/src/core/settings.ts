import axios from 'axios'

export const mainGithubClient = axios.create({
  baseURL: 'https://api.github.com',
})

export const contentGithubClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com',
})
