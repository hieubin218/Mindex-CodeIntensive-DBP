import React, { Component } from 'react';

class LinkDetail extends Component {
    constructor(props) {
        super(props); 
        this.state={
            LinkInput: [],
        }
    }

    onChangeUserInput = (event) => {
        this.setState({
            LinkInput: event.target.value,
        })

    }

    onSearchUserInput = (event) => {
        event.preventDefault();
       

    }

    render() {
        const {onSearchLink} = this.props;
        return (
            <div>
                <form className="LinkInput" 
                      style={{display: "flex"}}
                      onSubmit={this.onSearchUserInput}
                    >

                    <label> Enter a Link </label>
                    <span>
                        <input type="text"
                               className="textBox"
                               name="LinkInput"
                               value={this.state.LinkInput}
                               onChange={this.onChangeUserInput}
                               placeholder="Here....."
                        >
                        </input>
                    </span>

                    <span>
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={() => onSearchLink(this.state)}
                                >
                            Search
                        </button>
                    </span>
                </form>

                <span style={{marginTop: "30px"}}>
                    <label>Short Demain: </label>
                    <button className="shrtco.de" type="button">
                        shrtco.de
                    </button>

                    <button className="9qr.de" type="button">
                        9qr.de
                    </button>

                    <button className="shiny.link" type="button">
                        shiny.link
                    </button>
                </span>
                
            </div>
        );
    }
}

export default LinkDetail;