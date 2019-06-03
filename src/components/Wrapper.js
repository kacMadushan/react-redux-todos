import React from 'react';

const Wrapper = (props) => (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    </div>
);

export default Wrapper;