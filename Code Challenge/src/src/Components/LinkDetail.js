import React, { Component } from 'react';

class LinkDetail extends Component {
    constructor(props) {
        super(props); 
        this.state={
            LinkInput: "",
        };
    }

    onChangeUserInput = (event) => {
        this.setState({
            LinkInput: event.target.value,
        })

    }

    onSubmitSearchUser = (event) => {
        event.preventDefault();
        this.props.onFetchUsers(this.state.LinkInput);
       this.setState({
           search: "",
       });

    }

    render() {
        const {LinkInput} = this.state;
        return (
            <div>
                <form className="LinkInput" 
                      style={{display: "flex"}}
                      onSubmit={this.onSubmitSearchUser}
                    >

                    <label> Enter a Link </label>
                    <span>
                        <input type="text"
                               className="textBox"
                               name="LinkInput"
                               value={LinkInput}
                               onChange={this.onChangeUserInput}
                               placeholder="Here....."
                        >
                        </input>
                    </span>

                    <span>
                        <button type="submit"
                                label="search"
                                className="btn btn-primary"
                                >
                            Submit
                        </button>
                    </span>
                </form>

                <span style={{marginTop: "30px"}}>
                    <label>Short Demain: </label>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">shrtco.de</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">9qr.de</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">shiny.link</label>
                    </div>
                </span>
                
            </div>
        );
    }
}

export default LinkDetail;