import * as axiosWrapper from '../../../utilities/axios-utils'

export const resetPassword = {
  formatUrl: () => `/auth/reset`,
  request: (url, body) => axiosWrapper.post(url, body),
  serialize: (email) => ({ email })
}