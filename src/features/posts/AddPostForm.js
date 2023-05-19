import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postSlice';

const addPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onSavedPostClicked = () => {
        if(title && content) {
            dispatch(postAdded({
                id: nanoid(),
                title,
                content
            }))
            setTitle('');
            setContent('');
        }
    }

    return (
        <section className="add-post-form">
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
                <label htmlFor='postContent'>Post Content:</label>
                <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged}></textarea>
                <button type='button' onClick={onSavedPostClicked}>Save Post</button>
            </form>
        </section>
    );
};

export default addPostForm;