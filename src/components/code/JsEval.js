import React from "react"


class JsEval extends React.Component {
    state = {
        codeResult: "",
        expectedResult: "",
        evalMessage: ""
    }
    evalCode = (code) => {
        try {
            return eval(code);
        } catch (e) {
            if (e instanceof SyntaxError) {
                return "Error"
            }
        }
    }

    checkSolution = (codeResult) => {
        if (codeResult == this.props.algorithmAnswer) {
            return 'Your solution returned the expected answer!'
        } else {
            return 'Error: Check your solution again'

        }
    }

    handleShowCheckSolution = () => {
        let codeResult = ""
        let evaluetedCode = this.evalCode(this.props.codeToEval)
        if (this.props.codeToEval !== "" && evaluetedCode !== undefined) {
            codeResult = evaluetedCode.toString()
        } else if (evaluetedCode === undefined) {
            codeResult = 'undefined'
        }

        let evalMessage = this.checkSolution(codeResult)

        this.setState({
            codeResult: codeResult,
            expectedResult: this.props.algorithmAnswer,
            evalMessage: evalMessage

        })
    }

    render() {
        return (
            <div className="mt-3 mb-3">
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={this.handleShowCheckSolution} className="btn btn-outline-warning mb-2">Check
                            Solution
                        </button>
                    </div>
                </div>
                {
                    (this.state.codeResult !== "" || this.state.expectedResult !== "" || this.state.evalMessage !== "") &&
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-2 mt-2 text-center font-weight-bold border-bottom">Your Result</div>
                            <div className="text-center">
                                {this.state.codeResult}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-2 mt-2 text-center font-weight-bold border-bottom">Expected Result</div>
                            <div className="text-center">
                                {this.state.expectedResult}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-2 mt-2 text-center font-weight-bold border-bottom">Status</div>
                            <div className="text-center">
                                {this.state.evalMessage}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

}

export default JsEval
