import React from 'react';
import {ScheduleComponent, ViewsDirective, ViewDirective, Day, Week,
WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop} from "@syncfusion/ej2-react-schedule";

import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {scheduleData} from "../data/dummy";
import {Header} from "../components";

function Calendar(props) {
    return (
        <div className={"m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white"}>
            <Header category={"App"} title={"Calendar"}/>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
            <ScheduleComponent height="650px"
                               eventSettings={{
                                   dataSource: scheduleData
                               }}
                               selectedDate={new Date(2021, 0, 10)}
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
            </ScheduleComponent>
        </div>
    );
}

export default Calendar;
