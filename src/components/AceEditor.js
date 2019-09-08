import React from "react"
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';

class AceEditorJs extends React.Component {
    getEditorValue = (props) => {
        if (!props.quizExamples[props.questionNumber + 1] && props.currentQuiz.algorithm === true) {
            return props.currentQuiz.algorithmProblem
        } else {
            return props.quizExamples[props.questionNumber + 1] ? props.quizExamples[props.questionNumber + 1] : ""
        }
    }

    render() {

        return (
            <AceEditor
                placeholder="Add example here"
                mode="javascript"
                theme="monokai"
                name="blah2"
                style={{width: "100%", minHeight: "200px", height: "auto"}}
                onChange={code => this.props.handleExamplesTextArea(code)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                editorProps={{$blockScrolling: true}}
                value={this.getEditorValue(this.props)}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
        )
    }

}

export default AceEditorJs
