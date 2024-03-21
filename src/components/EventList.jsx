import { useState, useEffect } from 'react'

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

export default function EventList({ filteredEvents }) {
  const [collapsedStates, setCollapsedStates] = useState(
    events.map((_, index) => ({ index, collapsed: true }))
  )

  const handleClick = (index) => {
    setCollapsedStates((prevStates) => ({
      ...prevStates,
      [index]: {
        ...prevStates[index],
        collapsed: !prevStates[index].collapsed,
      },
    }))
  }

  const [eventsToDisplay, setEventsToDisplay] = useState([])

  // Update eventsToDisplay on receiving filteredEvents (assuming filtering happens elsewhere)
  useEffect(() => {
    setEventsToDisplay(filteredEvents)
  }, [filteredEvents])
  return (
    <div>
      <ul className="EventList">
        {filteredEvents.length > 0 && // Check filteredEvents exist
          filteredEvents.map((event, index) => (
            <li key={index}>
              <div className="text-left outline outline-1 outline-gray-300 rounded-md p-5 my-5">
                <h2 className="font-bold text-xl pb-2">{event.title}</h2>
                <p className="pb-2">@{event.time}</p>
                <p className="pb-2"> {event.location}</p>

                {/* Check for collapsedStates[index] existence */}
                {!collapsedStates[index].collapsed && ( // Check if event is expanded
                  <p className="font-light italic">{event.summary}</p>
                )}
                <div className="flex justify-end">
                  <button
                    className="p-2 bg-zinc-200 text-xs font-medium rounded-md"
                    onClick={() => handleClick(index)} // Pass only index
                  >
                    {collapsedStates[index].collapsed
                      ? 'Show Details'
                      : 'Hide Details'}
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
