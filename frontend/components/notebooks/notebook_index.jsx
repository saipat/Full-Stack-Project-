import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class NotebookIndex extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
            currentUser: this.props.currentUser
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(){
        //need condition
        // this.props.fetchNotebooks(_____);
    }

    handleClick(){
        // console.log("inside index --------", this.props);
        this.props.openModal('createNotebook');
    }

    render() {
        let lists = this.props.notebooks.map( notebook => {
            return (
                <NotebookIndexItem 
                    key={notebook.id}
                    notebook={notebook}
                    openModal={this.props.openModal} 
                    fetchNotebook={this.props.fetchNotebook}
                    deleteNotebook={this.props.deleteNotebook}
                />
            )
        });
        return (
          <div className="notebook-container">
            <h2>Notebooks</h2>
            <div className="nb-navbar">
                <p>My notebook list</p>
                <button className="move-center" onClick={this.handleClick}><i className="fa fa-book"></i>
                New Notebook</button>
                <button className="move-right"><i className="fa fa-sort-amount-desc"></i></button>
            </div>
            <table>
                <thead className="head">
                    <tr className="tr-head">
                        <th className="title">TITLE<i className="fa fa-arrow-up"></i></th>
                        <th>CREATED BY </th>
                        <th>UPDATED</th>
                        <th>SHARED WITH</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
               
               
            </table>
                
            {lists}
          </div>
        );
    }
}

export default NotebookIndex;

