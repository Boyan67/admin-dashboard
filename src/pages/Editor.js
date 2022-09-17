import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg ">
        <Header category="App" title="Editor" />
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
        <RichTextEditorComponent>
            <EditorData />
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
    </div>
);
export default Editor;
