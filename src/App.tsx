import hangoutLogo from './assets/hangout-logo.png'
import hnmLogo from './assets/hnm-logo.png'
import malibuLogo from './assets/Malibu logo white.png'
import './App.css'

function App() {
  const venues = [
    {
      id: 'hangout',
      name: 'Hangout',
      logo: hangoutLogo,
      url: 'https://boltspark-snet.vercel.app/hangout',
      theme: 'dark',
    },
    {
      id: 'malibu',
      name: 'Malibu',
      logo: malibuLogo,
      url: 'https://boltspark-snet.vercel.app/malibu',
      theme: 'dark',
    },
    {
      id: 'hnm',
      name: 'HNM',
      logo: hnmLogo,
      url: 'https://boltspark-snet.vercel.app/hnm',
      theme: 'dark',
    },
  ]

  return (
    <>
      <div className="content-wrapper">
        <h1 className="intro-text">Where are you at?</h1>
        <div className="venue-stack">
          {venues.map((venue) => (
            <a
              key={venue.id}
              href={venue.url}
              className="venue-logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={venue.logo} className="venue-logo-display" alt={`${venue.name} logo`} />
              {/* Optional: Simple text label if needed, or purely visual */}
              {/* <span className="venue-label">{venue.name}</span> */}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
