import {
    TABLE_DATA_LIST,
} from '../constants'
import {baseURL, endpoint} from '../../../config'
import api from '../../../core/api'
import { setErrMsg } from '../../redux/actions'



export const ActionCreator = (type, payload) => ({
  type,
  payload,
})


// export const CreateProject = payload => {
//   return dispatch => {
//     return new Promise((resolve, reject) => {
//       api.post(baseUrl, payload).then(
//         res => {
//           dispatch(ActionCreator(CREATE_PROJECT, res))
//           dispatch(getProjectList(''))
//           dispatch(CreateProjectDraft())
//           resolve(res)
//         },
//         err => {
//           reject(setErrMsg(err))
//         }
//       )
//     })
//   }
// }



// export const getProject = id => {
//   return dispatch => {
//     return new Promise((resolve, reject) => {
//       api.get(baseUrl + '/' + id).then(
//         res => {
//           dispatch(ActionCreator(SINGLE_PROJECT, res))
//           resolve()
//         },
//         err => {
//           console.log(err)
//           reject(setErrMsg(err))
//         }
//       )
//     })
//   }
// }



export const allTableData = () => {
  console.log('ffffffffffffff')
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        const url =  endpoint.all_article_data;
        api.get(url).then(
          res => {
            dispatch(ActionCreator(TABLE_DATA_LIST, res))
            resolve()
          },
          err => {
            console.log(err)
            reject(setErrMsg(err))
          }
        )


    })
  }
}
