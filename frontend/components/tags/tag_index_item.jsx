import React from 'react';
import tagReducer from '../../reducers/tag_reducer';

class TagIndexItem extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="tags-item">
                <h1>fsalgjhlesjorhg;sejrgh'speitjdg'ostheg</h1>
                <h2 className="tag-letter">{this.props.tag.tag_name.slice(0,1).toUpperCase()}</h2>
            </div>
        )
    }
}