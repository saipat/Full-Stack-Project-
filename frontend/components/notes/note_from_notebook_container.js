import { fetchNotes, fetchNote, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import NoteIndex from './note_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
    if (!state.entities.notes){
        state.entities.notes = [];
    }
    let notebookId = ownProps.match.params.notebookId;
    return ({
        notes: Object.values(state.entities.notes).filter( note => {
           return note.notebook_id === notebookId
        })
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotes: (notebookId) => dispatch(fetchNotes(notebookId)),
        fetchNote: id => dispatch(fetchNote(id)),
        createNote: (note, notebookId) => dispatch(createNote(note, notebookId)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndex));