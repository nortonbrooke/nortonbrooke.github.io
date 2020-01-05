import React from 'react';
import { formatDate, getDuration } from './util';
import Image from './Image';
import Link from './Link';
import './App.css';

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    this.setState({ data });
  }

  render() {
    const { state } = this;

    if (!state.data) {
      return <div />
    }

    return (
      <div className="App">
        <header className="App-header">
          <Image src={state.data.profile.imageURL} size="large" shape="circle" label="Profile image" />
          <div className="App-col">
            <h2>{state.data.profile.name}</h2>
            <div className="App-row">
              <Link url={state.data.profile.locationURL}><span role="img" aria-label="Earth emoji">🌏</span> {state.data.profile.city}, {state.data.profile.state}</Link>
            </div>
            <div className="App-row">
              <div className="App-flex">
                <Link url={`mailto:${state.data.profile.email}`}>
                  <span role="img" aria-label="Email outbox emoji">📤</span> Email
              </Link>
                <Link url={`tel:+1${state.data.profile.phone}`}>
                  <span role="img" aria-label="Phone emoji">📲</span> Call
              </Link>
              <Link url={`sms:+1${state.data.profile.phone}`}>
                <span role="img" aria-label="Speech bubble emoji">💬</span> Text
              </Link>
              </div>
              <div className="App-flex">
                {state.data.social.map((item) => <Link url={item.url}>
                  <Image src={item.imageURL} desc={item.name} size="small" />
                </Link>)}
              </div>
            </div>
          </div>
        </header>
        <div className="App-body">
          <h1>About</h1>
          <div className="App-section">
            <p>{state.data.profile.about}</p>
          </div>
          <h1>Portfolio</h1>
          <div className="App-grid">
            {state.data.portfolio.map((item) => <div className="App-col center" key={item.name}>
              <Link url={item.url} disabled={!item.online}>
                <Image src={item.imageURL} desc={item.name} size="large" shape="square" />
                {!item.online && <div className="App-banner">Coming Soon</div>}
              </Link>
              <b>{item.name}</b>
              <span>{item.description}</span>
              <span>{formatDate(item.startDate)} - {formatDate(item.endDate)}</span>
              <span>{getDuration(item.startDate, item.endDate)}</span>
            </div>)}
          </div>
          <h1>Education</h1>
          <div className="App-section">
            {state.data.education.map((item) => <div className="App-row" key={item.certificate}>
              <div className="App-col">
                <b>{item.certificate}</b>
                <span>{item.school}</span>
                <span>{formatDate(item.startDate)} - {formatDate(item.endDate)}</span>
                <span>{item.city}, {item.state}</span>
              </div>
              <Link url={item.url}>
                <Image src={item.imageURL} desc={`${item.school} logo`} size="medium" />
              </Link>
            </div>)}
          </div>
          <h1>Experience</h1>
          <div className="App-section">
            {state.data.experience.map((item) => <div className="App-row" key={item.company}>
              <div className="App-col">
                <b>{item.title}</b>
                <span>{item.company}</span>
                <span>{formatDate(item.startDate)} - {formatDate(item.endDate)} · {getDuration(item.startDate, item.endDate)}</span>
                <span>{item.city}, {item.state}</span>
              </div>
              <Link url={item.url}>
                <Image src={item.imageURL} desc={`${item.company} logo`} size="small" />
              </Link>
            </div>)}
          </div>
          <h1>Projects</h1>
          <div className="App-section">
            {state.data.projects.map((item) => <div className="App-row" key={item.name}>
              <div className="App-col">
                <b>{item.name}</b>
                <span>{item.description}</span>
                <span>{item.organization}</span>
                <span>{item.department}</span>
                <span>{formatDate(item.startDate)} - {formatDate(item.endDate)} · {getDuration(item.startDate, item.endDate)}</span>
              </div>
              <Link url={item.url}>
                <Image src={item.imageURL} desc={item.name} size="medium" />
              </Link>
            </div>)}
          </div>
          <h1>Things I Enjoy</h1>
          <div className="App-section">
            <div className="App-col">
              <div><span role="img" aria-label="Coffee emoji">☕</span> Coffee</div>
              <div><span role="img" aria-label="Beer emoji">🍺</span> Beer</div>
              <div><span role="img" aria-label="Taco emoji">🌮</span> Mexican Food</div>
              <div><span role="img" aria-label="Flexed bicep emoji">💪</span> Exercising</div>
              <div><span role="img" aria-label="Tragedy and comedy masks emoji">🎭</span> Performing Arts</div>
              <div><span role="img" aria-label="Woman dancing emoji">💃</span> Dancing</div>
              <div><span role="img" aria-label="Roller coaster emoji">🎢</span> Theme Parks</div>
              <div><span role="img" aria-label="Map emoji">🗺️</span> Traveling</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
