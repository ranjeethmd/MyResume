export const useFetch = () => {
    const controller = new AbortController();
    const { signal } = controller;

    const createFetch = (url, requestOptions = {}) => {
        requestOptions.signal = signal;
        return fetch(url, requestOptions);
    }

    return [controller, createFetch];
}