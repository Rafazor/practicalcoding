import React from "react"


class JsEval extends React.Component {

    evalCode = (code) => {
        try {
            return eval(code);
        } catch (e) {
            if (e instanceof SyntaxError) {
                return "Error"
            }
        }
    }

    render() {
        return (
            <>
                <div>{this.evalCode(this.props.codeToEval)}</div>
                <div>{"expected answer: " + this.props.algorithmAnswer}</div>

                <div>{this.evalCode(this.props.codeToEval) == this.props.algorithmAnswer ? "GOOD" : "PLM"}</div>
            </>
        )
    }

}

export default JsEval
