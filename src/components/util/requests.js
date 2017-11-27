const PATH_TO_PHILOSOPHY_API_URL = "https://philosophy-app-api.herokuapp.com"

function getPathToPhilosophy(pageTopic, onSuccess, onError) {
    return fetch(`${PATH_TO_PHILOSOPHY_API_URL}/path-to-philosophy/${pageTopic}`)
        .then((response) => {
            if (response.status != 200) {
                return Promise.reject(response)
            } else {
                return Promise.resolve(response.json());
            }
        })
        .then((jsonData) => { onSuccess(jsonData) })
        .catch((err) => { onError(err) })
}

export { getPathToPhilosophy };