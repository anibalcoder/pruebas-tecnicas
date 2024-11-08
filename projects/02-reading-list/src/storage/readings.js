const setStoredReadings = (readings) => {
  window.localStorage.setItem('readings', JSON.stringify(readings))
}

const getStoredReadings = JSON.parse(window.localStorage.getItem('readings'))

export { setStoredReadings, getStoredReadings }
