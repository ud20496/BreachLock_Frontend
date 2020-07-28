import React from 'react';
import axios from 'axios';

export default class UploadFile extends React.Component {

    constructor(props) {
        super(props);
        this.uploadButton = this.uploadButton.bind(this);
        this.handleImport = this.handleImport.bind(this);
        this.exportButton = this.exportButton.bind(this);
        this.state = { file: null, items: [] }
    }
    
    handleImport(data) {
        this.setState({ file: data.target.files[0] })
        axios.post("http://127.0.0.1:1337/", data, {
        }).then(res => { // then print response status
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }

    //Upload file to databse and display data into next page
    uploadButton(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('file', this.state.file);
        axios.post("http://127.0.0.1:1337/", data, {
        }).then(res => { // then print response status
            this.setState({ items: res.data })

            localStorage.setItem('items', this.state.items)
            this.props.history.push({
                pathname: '/display',

            })
        }).catch(err => {
            console.log(err)
        })
    }
     
    //Export file from database
    exportButton() {
        axios.get('http://127.0.0.1:1337/exportToCSV')
            .then((res) => {
                console.log(res.data)
                if (res.data == 'OK')
                    alert("file exported")
            })


    }

    render() {
        return (
            <div><h1>Upload your CSV file here</h1>
                <form action="POST">
                    <input type="file" name='file' onChange={this.handleImport} />
                    <button type='submit' class="DhtEg1" onClick={this.uploadButton}>Upload File</button>
                </form>
                <button type='submit'class="DhtEg" onClick={this.exportButton}>Export File</button>
            </div>
        )
    }

}
