import React from 'react';
import PropTypes from 'prop-types';

PatientList.propTypes = {
    posts: PropTypes.array,
};

PatientList.defaultProps = {
    posts: [],
}

function PatientList(props) {
    const { posts } = props;

    return (
        <ul className="post-list">
            <h1>danh sach</h1>
            {posts.map(post => (
                <li key={post.id}>{post.name}-{post.address}-{post.idno}--{post.planeid}</li>
            ))
            }
        </ul>
    );
}

export default PatientList;