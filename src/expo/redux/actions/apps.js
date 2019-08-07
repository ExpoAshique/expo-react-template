

export const ActionCreator = (type, payload) => ({
  type,
  payload,
})


export const setErrMsg = err => {
  if (!err.response) {
    return {
      status: 500,
      message: 'Network error! Please check your internet connection',
    }
  } else {
    return {
      status: err.response.status,
      message: err.response.statusText,
      data: err.response.data
    }
  }
}
