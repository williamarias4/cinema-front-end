export const debounce = (callback, timeout = 350) => {

    let timer = null

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), timeout)
    }
}