import baseService from './base.service'

const githubService = {
  repoExist: async (user: string, repo: string) => {
    return baseService.get('https://api.github.com/repos/'+user+'/'+repo)
      .then(handleErrors)
      .then(res => res.json())
      .catch(error => {
        throw(error.message)
      })
  },

}


const handleErrors = (response) => {
  if (response.status === 404) {
    throw Error('Check your username or your repository name');
  }
  if (response.status === 403) {
    throw Error('GitHub API rate limit exceeded');
  }
  return response;
}


export default githubService