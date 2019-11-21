import React from "react";

// Creating a Titles component
class Titles extends React.Component {

    render() {
        // Uses regular HTML tags to build up a customized and reusable Titles component
        // In App.js, see this component being used!
        return (
            <div>
                <h1 className="title-container__title"> Weather Scanner 2.0 </h1>
                <p className="title-container__subtitle"> Look up weather conditions in cities around the world!! </p>
            </div>
        )
    }
}

export default Titles;