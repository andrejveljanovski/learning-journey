import { eventsData } from './events.js'
import { EventType } from './types'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const today = new Date()

export let currentMonth = today.getMonth()
export let currentYear = today.getFullYear()

const calendarBody = document.querySelector('#calendar-body')!
const prev = document.querySelector('#prevBtn')!
const next = document.querySelector('#nextBtn')!

prev.addEventListener('click', onPrev)
next.addEventListener('click', onNext)

function onPrev () {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1

  renderCalendar(currentYear, currentMonth, eventsData)
}

function onNext () {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
  currentMonth = currentMonth === 11 ? 0 : currentMonth + 1

  renderCalendar(currentYear, currentMonth, eventsData)
}

export function renderCalendar (
  year: number,
  month: number,
  events: EventType[]
) {
  const renderToday = new Date()
  const monthAndYear = document.querySelector('#monthAndYear')!
  monthAndYear.innerHTML = `${months[month]} ${year}`

  const thisYearAndMonthEvents = events.filter(
    event =>
      event.date.getFullYear() === year && event.date.getMonth() === month
  )

  
  const firstDay = new Date(year, month).getDay()

  const daysInMonth = 32 - new Date(year, month, 32).getDate()

  let date = 1

  calendarBody.innerHTML = ''

  for (let i = 0; i < 6; i++) {
   
    const week = document.createElement('div')
    week.classList.add('calendar-week')

    for (let j = 0; j < 7; j++) {
     

      if (i === 0 && j < firstDay) {
        

        const emptyCell = document.createElement('div')
        emptyCell.classList.add('empty-cell')

        week.append(emptyCell)
      } else if (date <= daysInMonth) {
       
        const dayCell = document.createElement('div')
        dayCell.classList.add('day-cell')

        const span = document.createElement('span')
        span.textContent = date.toString()

        if (
          renderToday.getFullYear() === year &&
          renderToday.getMonth() === month &&
          renderToday.getDate() === date
        ) {
          dayCell.classList.add('today')
        }

        
        if (thisYearAndMonthEvents.length) {
          
          const todayEvents = thisYearAndMonthEvents.filter(
            event => event.date.getDate() === date
          )

          if (todayEvents.length) {
            dayCell.classList.add('event-day')

            todayEvents.forEach(event => {
              const eventWrapper = document.createElement('div')
              eventWrapper.classList.add('event')
              eventWrapper.style.borderLeft = `5px solid ${event.color}`

              eventWrapper.textContent = event.title
              dayCell.append(eventWrapper)
            })
          }
        }

        dayCell.append(span)

        week.append(dayCell)

        date++
      } else if (date > daysInMonth) {
        // add empty cells

        const emptyCell = document.createElement('div')
        emptyCell.classList.add('empty-cell')

        week.append(emptyCell)
      }
    }

    calendarBody.append(week)
  }
}
