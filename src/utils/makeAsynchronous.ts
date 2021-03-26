export function makeAsynchronous<T>(item: T, error = false, time = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject()
      }

      resolve(item)
    }, time)
  })
}
