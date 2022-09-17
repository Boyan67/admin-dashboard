import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white ">
        <Header category="App" title="Kanban" />
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
        <KanbanComponent
            id="kanban"
            keyField="Status"
            dataSource={kanbanData}
            cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        >
            <ColumnsDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
        </KanbanComponent>
    </div>
);

export default Kanban;
