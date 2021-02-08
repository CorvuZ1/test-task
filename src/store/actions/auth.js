export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";

export function signInSuccess(status) {
  return dispatch => {
    if (status) {
      localStorage.setItem("isAuth", status)
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
          status,
          message: "Вы будете перенаправлены на страницу профиля"
        }
      })
    } else if (!status) {
      dispatch({
        type: SIGN_IN_FAIL,
        payload: {
          status: false,
          message: "Имя пользователя или пароль введены не верно"
        }
      })
    }
  }
}