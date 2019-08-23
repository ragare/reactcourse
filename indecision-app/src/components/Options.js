import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button
            onClick={props.handleDeleteOptions}
            className="button button--link"
        >
            Remove all
            </button>
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
)

export default Options