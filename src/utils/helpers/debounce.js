export function debounce(func, time = 500) {
  let timer
  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => func.apply(this, args), time)
  }
}
