import './App.css'
import EventGenre from './components/EventGenre'
import ScatterPlot from './components/ScatterPlot'
import EventList from './components/EventList'
import { useState } from 'react'

function App() {
  const events = [
    {
      title: 'Learn Javascript',
      summary:
        'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) Javascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
      location: 'Berlin',
      time: '2024-03-21T16:00:00+01:00',
    },
    {
      title: 'Learn Angular',
      summary:
        'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features.',
      location: 'Tokyo',
      time: '2024-03-21T16:00:00+01:00',
    },
    {
      title: 'Learn React',
      summary:
        'Love HTML, CSS, and JS? Want to become a cool front-end developer? React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. Join us in our free React training sessions and give your career a new direction. ',
      location: 'Tokyo',
      time: '2024-03-21T16:00:00+01:00',
    },
    {
      title: 'Learn JQuery',
      summary:
        'Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? Though many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. In our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.',
      location: 'San Francisco',
      time: '2024-03-21T16:00:00+01:00',
    },
    {
      title: 'Intermediate: Learn React Hooks',
      summary:
        'Love HTML, CSS, and JS? Want to become a cool front-end developer? React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. Join us in our free React training sessions and give your career a new direction. ',
      location: 'Shibuya',
      time: '2024-03-21T16:00:00+01:00',
    },
    {
      title: 'Learn Node.js',
      summary:
        'Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. Join us if you want to learn how to build the server-side of an app using Node.js.',
      location: 'Atlanta',
      time: '2024-03-21T16:00:00+01:00',
    },
    {
      title: 'Advanced: Learn Javascript',
      summary:
        'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) Javascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
      location: 'Toronto',
      time: '2024-03-21T16:00:00+01:00',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredEvents, setFilteredEvents] = useState(events)
  const [numEventsToDisplay, setNumEventsToDisplay] = useState(events.length) // Initial value set to total events

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase() // Lowercase for case-insensitive search
    setSearchTerm(searchTerm)
    const filteredEvents = events.filter((event) =>
      event.location.toLowerCase().includes(searchTerm)
    )
    setFilteredEvents(filteredEvents)
  }

  const handleNumEventsChange = (event) => {
    const num = parseInt(event.target.value) // Convert input value to number
    if (isNaN(num) || num < 0 || num > events.length) {
      // Handle invalid input: non-numeric, negative, or exceeding total events
      console.error('Invalid number of events entered.')
      return
    }
    setNumEventsToDisplay(num)
  }

  const slicedEvents = filteredEvents.slice(0, numEventsToDisplay) // Slice filtered events

  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center items-center my-5">
        <h3 className="font-bold text-2xl">
          MeetApp <span className="font-thin">Demo</span>
        </h3>
      </div>
      <div className="flex items-center justify-center font-thin">
        <a
          href="https://cgzmartinez.github.io/meet/"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="hover:text-[#84C7D0] hover:font-medium">Live App </h3>
        </a>
        <p>&nbsp;·&nbsp;</p>
        <a
          href="https://github.com/cgzmartinez/meet"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="hover:text-[#9368B7] hover:font-medium"> Github</h3>
        </a>
      </div>
      <div className="justify-center items-center mt-7">
        <h3 className="font-semibold text-xl">Choose a City</h3>
        <input
          type="text"
          placeholder="Search by City"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="justify-center items-center mt-7">
        <h3 className="font-semibold text-xl">Number of Events</h3>
        <input
          type="number"
          min="1"
          max={events.length} // Set min and max for valid input range
          value={numEventsToDisplay} // Display current number
          onChange={handleNumEventsChange}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
        <EventGenre events={events} filteredEvents={slicedEvents} />
        <ScatterPlot events={events} filteredEvents={slicedEvents} />
      </div>
      <EventList events={events} filteredEvents={slicedEvents} />
      {/* Pass slicedEvents to EventList */}
    </div>
  )
}

export default App
