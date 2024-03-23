import React from 'react';
import { Message } from '../../share/environment/message';

// Error message will be passed
export function errorMessage (error) {
    // Assign a variable for easy deletion when not needed to update
    let intervalId = window.setInterval((() => {
        let err = document.getElementById('newErrorMessage');
        if (err !== null) {
            // As long as it's not a connection error
            err.innerText = "NO DATA";
            console.error("API Server can't find news .");
            console.error(Message.errorMessage);
            console.error(error);
            window.clearInterval(intervalId);
        } else {
            window.clearInterval(intervalId);
        }
    }), 2000);
    return (
        <section>
            <div className="h1 my-5 d-flex justify-content-center">
                <div className="newsDetailTitle">Loading . . . Please Wait . . .</div>
            </div>
            <div className="h1 my-5 d-flex justify-content-center">
                <div className="newsDetailTitle" id="newErrorMessage">NO DATA</div>
            </div>
        </section>
    );
}
