// Utilities
import { getWeek } from '@/util/dateTimeUtils'

// Types
import type { DateAdapter } from './date-adapter'

export default class DateFnsAdapter implements DateAdapter<Date> {
  getWeek (date: Date) {
    return getWeek(date)
  }

  addDays (date: Date, amount: number) {
    return null
  }

  date () {
    return null
  }

  format (date: Date, formatString: string) {
    return null
  }

  getMonth (date: Date) {
    return null
  }

  getWeekArray (month: Date) {
    return null
  }

  getYear (date: Date) {
    return null
  }

  isSameDay (date: Date, comparing: Date) {
    return null
  }

  isSameMonth (date: Date, comparing: Date) {
    return null
  }

  isWithinRange (date: Date, range: [Date, Date]) {
    return null
  }
}
