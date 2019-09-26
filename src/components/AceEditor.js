import React from "react"
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';

import JsEval from "./code/JsEval";

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
            <>
                <div>
                    <AceEditor
                        placeholder="Add example here"
                        mode={this.props.currentQuiz.type}
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
                </div>
                <div>
                    {
                        this.props.currentQuiz.algorithm === true &&
                        <JsEval codeToEval={this.getEditorValue(this.props)}
                                algorithmAnswer={this.props.currentQuiz.algorithmAnswer}/>
                    }
                </div>
            </>
        )
    }

}

export default AceEditorJs
