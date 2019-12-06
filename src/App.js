import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './App.css';
import "@fullcalendar/timegrid/main.css";

export default class App extends React.Component {
  
  calendarComponentRef = React.createRef();
  
  state = {
    calendarEvents: [
      //takes a vector of maps
      //assoc event w/ resource: match event.resourceId to resource.id
      //assoc event w/ resources: match event.resourceIds to resource.id
      //event.resourceIds is a vector of strings
      {title: "Closing", 
       start: new Date(),
       // resourceId: "roomA"
       resourceIds: ["roomA", "roomB"],
       editable: true
      }
    ],
    resources: [
      {title: "Room A", id: "roomA"},
      {title: "Room B", id: "roomB"}
    ]
  };

  // handleDateClick = arg => {
  //   console.log(arg)
  // };


  handleDateClick = arg => {
    if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({         
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };

  render () {
    return (
      <div className="App">     
        <header className="App-header">
          <div id="st-header">
            <h1><span style={{color: '#0065b3'}}>Short</span>
            <span style={{color: '#ff9910'}}>Track</span> Calendar</h1>
          </div>     
          <FullCalendar 
            defaultView = "dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,resourceTimeGridDay"
            }} 
            dateClick={this.handleDateClick}
            events={this.state.calendarEvents}
            resources={this.state.resources}
            eventClick={this.handleEventClick}
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
            plugins={[resourceTimeGridPlugin, dayGridPlugin, 
                      interactionPlugin]}
          />         
        </header>
      </div> 
    );
  }
  
  handleEventClick = info => {
   alert(info.event.title);
    
    
  }; 

}


