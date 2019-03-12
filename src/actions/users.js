import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';
import { refreshProfileAuthToken, authError, login } from './auth';


export const registerUser = user => dispatch => {
  let password = user.password;
  let formData = new FormData();

  Object.keys(user).forEach(item=> {
      formData.append(item, (user[item]))
  });

  return fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      body: formData
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then((user) => dispatch(login(user.username, password)))
      .catch(err => {
          const {location, message, status } = err;
          const str =
              status === 422 && location==='registerUsername'
              ? message
              : 'Unable to register, please try again';
          dispatch(authError(err));
          // Could not authenticate, so return a SubmissionError for Redux
          // Form
          return Promise.reject(
              new SubmissionError({
                  [location]: str,
                  _error: str
              })
          );
      });
};