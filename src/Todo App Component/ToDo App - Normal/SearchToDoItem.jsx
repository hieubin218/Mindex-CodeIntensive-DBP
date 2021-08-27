import React, { Component } from 'react';

class SearchToDoItem extends Component {
    state= {
        query: "",
    }

    onQueryChange = (event) => {
        this.setState({
            query: event.target.value,
        });
        // Make this.props when trends 
        this.props.onQueryTodo(event.target.value);

        /** why not this.props.onQueryTodo(this.state.query) ?
         * Method: setState is bất đồng bộ -> chưa execute 
         * nó sẽ execute line 13: this.props first, and then back to setState 
         * 
         * Cach Xu Ly:
         *  this.setState({
            query: event.target.value,
        },
        () => {
            this.props.onQueryTodo(this.state.query);
        })
        */ 


        
    }



    btnClearQuery = (event) => {
        this.setState({
            query: "",
        });
        this.props.onQueryTodo("");
    }
    

    render() {
        
        
        return (
            <div>
                <label style={{
                    fontWeight: "bold", 
                }}>
                
                    <span>Filter tasks (by name)</span>
                    <div className="fg">    
                        <input type="text" 
                            placeholder="Enter Here"
                            value={this.state.query}
                            onChange={this.onQueryChange}>  
                        </input>
                        <button  onClick={this.btnClearQuery}>Clear</button>
                    </div>
                </label> 
            </div>
        );
    }
}

export default SearchToDoItem;