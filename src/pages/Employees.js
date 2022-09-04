import React from 'react';
import {GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Sort, Edit, Inject, Toolbar} from "@syncfusion/ej2-react-grids";

import {employeesData, contextMenuItems, employeesGrid} from "../data/dummy";
import {Header} from '../components'

function Employees(props) {
    return (
        <div className={"m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl"}>
            <Header title={"Employees"} category={"Page"}></Header>
            <GridComponent
                           dataSource={employeesData}
                           allowPaging
                           allowSorting
                           toolbar={["Search"]}
                           width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar, Sort]}/>
            </GridComponent>
        </div>
    );
}

export default Employees;
