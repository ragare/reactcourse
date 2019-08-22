import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {
                props.options.length == 0 && <p>No options available</p>
            }
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handelDeleteOption={props.handelDeleteOption}
                    />
                ))
            }
        </div>
    );
}

export default Options