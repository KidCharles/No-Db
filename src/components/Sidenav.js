import React, {Component} from "react";

import axios from 'axios';


class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state={
           quote:'',
           author:'',
        }
    }

    componentDidMount() {
        axios.get('http://quotes.rest/qod.json?category=management').then(res => {
     let randomQuote = res.data.contents.quotes[0].quote;
     let randomAuthor = res.data.contents.quotes[0].author;
     this.setState({quote: randomQuote, author: randomAuthor})
     })
    }
    
    render(){
        return(
         <div>
             
            <br/>
            <h2>quote</h2>
            <hr />
            <br/>
            <h5>{this.state.quote}</h5>
            <br/>
            <br/>
            <h5>- {this.state.author}</h5>
         </div> 
        )
    }

    


}

export default Sidenav;
