export const SHOW_ERROR = "SHOW_ERROR";
export const SHOW_LOADING = "SHOW_LOADING";

export function showLoading(isShow) {
    return {
        type: SHOW_LOADING,
        payload: isShow
    }
}

export function showError(errMsg) {
    return {
        type: SHOW_ERROR,
        payload: errMsg
    }
}
