import React from 'react';

const DeleteButton = (props) => {
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
            className="btn-icon btn-delete"
            onClick={handleClick}
        >
        {children ||
            <i className="fa fa-times"></i>
        }
        </a>
    );
};

DeleteButton.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    onClick: React.PropTypes.func
};
DeleteButton.defaultProps = {
    title: 'Delete'
};

export default DeleteButton;
