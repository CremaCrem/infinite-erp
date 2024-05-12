'use client';
import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import styled from 'styled-components'

const events = [
  { title: 'Meeting', start: new Date() }
]

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const StyleWrapper = styled.div`
  .fc {
    background-color: white; /* Set background color for FullCalendar */
    border: 12px solid white;
    border-radius: 20px; /* Set border radius to round corners */
    width: 500px
  }
  .fc-header-toolbar button {
    background-color: #53DD6C; /* Set background color for buttons in the header toolbar */
    color: white; /* Set text color for buttons in the header toolbar */
    border: none; /* Remove borders from buttons */
    border-radius: 10px; /* Set border radius for buttons */
    margin: 5px 10px 1px 1px; /* Set margin between buttons */
    cursor: pointer; /* Set cursor to pointer for buttons */
  }
  .fc-toolbar-title {
    font-size: 30px; /* Set font size for the title */
    font-weight: bold; /* Set font weight for the title */
    color: #333; /* Set text color for the title */
    font-family: 'Montserrat', sans-serif;
    margin: 5px 10px 1px 20px;
  }
  .fc-header-toolbar button.fc-today-button {
    background-color: #53DD6C;
    font-family: 'Lato', sans-serif;
  }
  .fc-header-toolbar button:hover {
    background-color: #E1B07E;
    font-family: 'Lato', sans-serif;
  }
  .fc-addEvent-button {
    background-color: #53DD6C; /* Set background color */
    color: white; /* Set text color */
    border: none; /* Remove border */
    border-radius: 5px; /* Set border radius */
    padding: 8px 16px; /* Add padding */
    margin-left: 5px; /* Adjust left margin */
    cursor: pointer; /* Set cursor */
    font-family: 'Montserrat', sans-serif; /* Set font family */
    font-weight: bold; /* Set font weight */
    font-size: 20px; /* Set font size */
  }
`

const Calendar = ({ events }) => {
  const [calendarEvents, setCalendarEvents] = useState(events || [])

  const handleAddEvent = (title, startDate) => {
    const newEvent = {
      title: title || 'New Event', 
      start: startDate || new Date(), 
      allDay: true
    };
    setCalendarEvents([...calendarEvents, newEvent]);
  };

  useEffect(() => {
    handleAddEvent('Birthday Party', new Date(2024, 4, 25));
  }, []);

  return (
    <StyleWrapper className='flex justify-end mr-[80px] mt-5 mb-6'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={calendarEvents}
        eventContent={renderEventContent}
        customButtons={{
          addEventButton: {
            text: 'Add Event',
            click: handleAddEvent
          }
        }}
        headerToolbar={{
          start: 'title',
          center: 'addEventButton',
          end: 'prev,next'
        }}
      />
    </StyleWrapper>
  );
};

export default Calendar;