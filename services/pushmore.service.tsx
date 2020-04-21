import baseService from './base.service'

interface pushmoreSendRepoType {
  repoUrl:string,
  sender:string
}

const endpoint = "https://pushmore.io/webhook/d3Gm4aEPCuhAUjfbECLLdW41"

const pushmoreService = {
  sendRepo: async (data:pushmoreSendRepoType) => {
    let formData = new FormData();
    formData.append('repoUrl', data.repoUrl);
    formData.append('sender', data.sender)
    return baseService.post(endpoint, formData)
      .then(handleErrors)
      .then(res => res)
      .catch(error => {
        throw(error.message)
      })
  },

}


const handleErrors = async(response) => {
  if (response.status !== 200) throw Error('Error');
  const body = await response.text()  
  if (body !== 'OK') throw Error(body);
  return body;
}


export default pushmoreService 