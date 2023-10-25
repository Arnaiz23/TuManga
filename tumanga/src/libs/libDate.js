const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const getDateDiffs = (timestamp) => {
  const now = Date.now()
  const time = new Date(timestamp)
  const elapsed = (time - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export function getFormatDate({ timestamp }) {
  const rtf = new Intl.RelativeTimeFormat("es-ES", {
    style: "short",
  })

  const { value, unit } = getDateDiffs(timestamp)

  return rtf.format(value, unit)
}

export function formatDateCal({ date }) {
  const dateFormat = new Date(date)
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(dateFormat)
}
