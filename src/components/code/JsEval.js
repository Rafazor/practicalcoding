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
            return "good"
        } else {
            return "not good"

        }
    }
    handleShowCheckSolution = () => {
        let codeResult = this.evalCode(this.props.codeToEval)
        this.setState({
            codeResult: codeResult.toString(),
            expectedResult: this.props.algorithmAnswer,
            evalMessage: this.checkSolution(codeResult)

        })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={this.handleShowCheckSolution} className="btn btn-outline-primary ">Check
                            Solution
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">{this.state.codeResult}</div>
                    <div className="col-md-4">{this.state.expectedResult}</div>
                    <div className="col-md-4">{this.state.evalMessage}</div>
                </div>
            </>
        )
    }

}

export default JsEval
