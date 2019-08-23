import React from 'react'

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            className="button button--link"
            onClick={() => {
                props.handelDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
    </div>
)

export default Option