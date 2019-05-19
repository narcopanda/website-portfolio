import React, {Component} from 'react';
import {Document, Page} from 'react-pdf'

class Pdf extends Component{

    state = {numPages: null, pageNumber: 1}

    onDocLoadSuccess = ({numPages}) => {
        this.setState({ numPages})
    }

    render() {
        const {pageNumber, numPages} = this.state
      return (
        <div style={{width: 600}}> 
            <Document file='/cv-sean-rowland.pdf' onLoadSuccess={this.onDocLoadSuccess} >
                <Page pageNumber={pageNumber} width={600} /> 
            </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
        </div>

      )
    }
}

export default Pdf