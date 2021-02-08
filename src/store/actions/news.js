export const GET_NEWS = "GET_NEWS";

export const controller = new AbortController()

export function getNews() {
  return async dispatch => {
    const API_KEY = "0f2cc3f4db144eec91f4e631adbdc457";
    let signal = controller.signal
    try {
      let response = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`, {
        method: "get", signal
      });
      let data = await response.json();
        dispatch({
          type: GET_NEWS,
          payload: {
            newsList: data.articles,
            loading: false
          }
        })
    } catch {
      console.log("getNews")
    } 
  }
}