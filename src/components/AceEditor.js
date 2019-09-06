import React from "react"
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';

export default (props) => (
    <AceEditor
        placeholder="Add example here"
        mode="javascript"
        theme="monokai"
        name="blah2"
        style={{width: "100%", minHeight: "200px", height: "auto"}}
        onChange={code => props.handleExamplesTextArea(code)}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{$blockScrolling: true}}
        value={props.quizExamples[props.questionNumber + 1] ? props.quizExamples[props.questionNumber + 1] : ""}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }}/>
)
