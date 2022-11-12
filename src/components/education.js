import React, {Component} from "react";

class Education extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {handleChange, handleDelete} = this.props
        const {university, location, degree, from, to, id, fieldIds} = this.props.education
        const [universityId, locationId, degreeId, fromId, toId] = fieldIds

        return (
            <div>
                <div>
                    <label htmlFor={`${universityId}${id}`}>University: </label>
                    <input value={university} id={`${universityId}${id}`} onChange={(e) => {handleChange(e, id)}} />
                </div>
                <div>
                    <label htmlFor={`${locationId}${id}`}>Location: </label>
                    <input value={location} id={`${locationId}${id}`} onChange={(e) => {handleChange(e, id)}} />
                </div>
                <div>
                    <label htmlFor={`${degreeId}${id}`}>Degree: </label>
                    <input value={degree} id={`${degreeId}${id}`} onChange={(e) => {handleChange(e, id)}} />
                </div>
                <div>
                    <label htmlFor={`${fromId}${id}`}>From: </label>
                    <input value={from} id={`${fromId}${id}`} onChange={(e) => {handleChange(e, id)}} />
                </div>
                <div>
                    <label htmlFor={`${toId}${id}`}>To: </label>
                    <input value={to} id={`${toId}${id}`} onChange={(e) => {handleChange(e, id)}} />
                </div>
                <button type="button" onClick={() => {handleDelete(id)}}>Delete</button>
            </div>
        )
    }
}

export default Education