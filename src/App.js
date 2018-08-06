import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import BookForm from './components/bookForm/bookForm';

moment.locale('es');
BigCalendar.momentLocalizer(moment);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {events: [], showForm: false};
  }

  handleOnSelectSlot = (slotInfo) => {
    if (!slotInfo.start.toTimeString().includes("00:00:00") && !slotInfo.end.toTimeString().includes("00:00:00")) {
      /*let event = {id: this.state.events.length + 1, title: 'Testing', startDate: new Date(slotInfo.start), endDate: new Date(slotInfo.end)}
      this.setState(prevState  => ({
        events: [...prevState.events, event]
      }))*/
      this.setState({showForm: true});
    } else {
      this.setState({showForm: false});
    }
  }

  render() {
    let button;
    if (this.state.showForm) {
      button =  <BookForm /> // <div className="popup"><button type="button" class="btn btn-primary popup_inner">Primary</button></div>
    } else {
      button = <div></div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BigCalendar className="App-calendar"
          selectable
          step={60}
          timeslots={1}
          min={new Date(0, 0, 0, 8, 0, 0)}
          max={new Date(0, 0, 0, 16, 0, 0)}
          events={this.state.events}
          startAccessor='startDate'
          endAccessor='endDate'
          messages={{next:"Siguiente", previous:"Atrás", today:"Hoy", month:"mes", week:"semana", day:"dia"}}
          onSelectSlot={this.handleOnSelectSlot}
        />
        {button}
      </div>
    );
  }
}

export default App;
