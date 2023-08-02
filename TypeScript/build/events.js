import { currentMonth, currentYear, renderCalendar } from './calendar.js';
export const eventsData = [
    {
        id: new Date().valueOf(),
        color: 'tomato',
        date: new Date(2022, 9, 1),
        title: "Is's your birthday!"
    },
    {
        id: new Date().valueOf(),
        color: 'yellow',
        date: new Date(2022, 9, 16),
        title: 'Typescript workshop!'
    },
    {
        id: new Date().valueOf(),
        color: 'navy',
        date: new Date(2022, 9, 18),
        title: 'Starting Reactjs!'
    }
];
const eventsContainer = document.querySelector('#eventsContainer');
const form = document.querySelector('#addEvent');
const dateInput = document.querySelector('#date');
const titleInput = document.querySelector('#title');
const colorInput = document.querySelector('#color');
function onAddEvent(e) {
    e.preventDefault();
    eventsData.unshift({
        id: new Date().valueOf(),
        color: colorInput.value,
        date: new Date(dateInput.value),
        title: titleInput.value
    });
    renderAllEvents(eventsData);
    renderCalendar(currentYear, currentMonth, eventsData);
    form.reset();
}
function renderAllEvents(allEvents) {
    eventsContainer.innerHTML = '';
    allEvents.forEach(event => {
        const card = renderEventCard(event);
        eventsContainer.append(card);
    });
}
function renderEventCard({ color, title, date }) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('event-in-list', 'border');
    cardWrapper.innerHTML = `<div class="event-in-list" style="border-left: 5px solid ${color};">
    <div>${title}</div>
    <div>${date.toLocaleDateString('en-GB')}</div>
  </div>`;
    return cardWrapper;
}
renderAllEvents(eventsData);
form.addEventListener('submit', onAddEvent);
renderCalendar(currentYear, currentMonth, eventsData);
//# sourceMappingURL=events.js.map