import React from 'react';

function ErrorMessage({ errorMessage}) {
    
    return (
        <div className="error-message">
            {errorMessage}
        </div>
    );
};

export default ErrorMessage;
