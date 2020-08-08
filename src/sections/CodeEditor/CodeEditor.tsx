import React from 'react';
import './CodeEditor.scss';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/theme-monokai";

import {HomeCode, AboutCode} from './Content';
const CodeEditor : React.FC = ()=>{
    return(
        <div className='code-editor'>
            <AceEditor
                mode="tsx"
                theme="monokai"
                fontSize={14}
                showGutter={true}
                value={HomeCode+AboutCode}
                showPrintMargin={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 4,
                }}/>
        </div>
    )
}
export default CodeEditor;