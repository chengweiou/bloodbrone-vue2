import fetchUtil from './util/fetchUtil'
import site from './config/site'

export default class {
  static login(e) {
    let url = `${site.xxx}/login`
    let formData = new FormData()
    formData.append('username', e.username)
    formData.append('password', e.password)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options).then(rest => {
      if (rest.code === 'SUCCESS') {
      }
      return rest
    })
  }

  static logout() {
    let url = `${site.xxx}/logout`
    let options = {
      method: 'POST',
    }
    return fetchUtil.run(url, options).then(rest => {
      return rest
    })
  }
}
