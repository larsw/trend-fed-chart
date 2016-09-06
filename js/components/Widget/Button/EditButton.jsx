import React from 'react';

const EditButton = (props) => {
    const handleClick = (event) => {
        event.preventDefault();

        props.onClick(event);
    };

    const { children, title, ...others } = props;

    return (
        <a
            {...others}
            href="#"
            title={title}
            className="btn-icon btn-edit"
            onClick={handleClick}
        >
        {children ||
            <i className="fa fa-cog"></i>
        }
        </a>
    );
};

EditButton.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    onClick: React.PropTypes.func
};
EditButton.defaultProps = {
    title: 'Edit'
};

export default EditButton;
