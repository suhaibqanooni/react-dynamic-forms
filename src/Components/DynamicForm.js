import React, { useEffect, useState } from 'react';
import { expectedInputTypes } from '../Data/SiteData';
function DynamicForm({ formConfig }) {
    const [count, setCount] = useState(1);
    const [moduleVisible, setModelVisible] = useState(true);
    const [fields, setFields] = useState([]);

    const [newType, setNewType] = useState(null)
    const [newRequired, setNewRequired] = useState()

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        setFields(formConfig.fields);
        console.log("Fields in useEffect: ", fields)
    }, [count]);

    const formFields = (e) => {
        setFormData([...formData, e])
    }
    const submitForm = () => {
        if (formData.length <= 0)
            return alert("Please Fill the form")
        alert("See Data in your Console");
        console.warn("Form Data: ", formData)
    }
    const addInput = () => {
        setModelVisible(true)
        setFields([...fields, { name: newType, type: newType, label: newType, required: newRequired }])
        console.warn(fields)
    }
    const removeField = (i) => {
        fields.splice(i, 1);
        console.warn("Fields in Remove: ", fields)
        setCount(count + 1)
    }
    return (
        <div>
            {
                fields.map((item, index) => {
                    return (
                        <form style={{ width: "500" }} key={index}>
                            <div className="form-group" style={{ display: "flex", justifyContent: "space-between" }}>
                                {item.type != "select" ?
                                    <>
                                        <label>{item.label}</label>
                                        <input type={item.type} name={item.name} required={item.required}
                                            className={item.type == "checkbox" ? "" : "form-control"}
                                            placeholder={item.label}
                                            onChange={e => { formFields(e.target.value); item.type === "checkbox" && formFields(e.target.checked) }}
                                        />
                                    </> : null
                                }
                                {item.type === "select" &&
                                    <select className="form-control" onChange={e => formFields(e.target.value)} >
                                        <option value={null}>Select</option>
                                        {item.options.map((op, index) => {
                                            return <option value={op.value} key={index}>{op.label}</option>
                                        })}
                                    </select>
                                }
                                <a className="btn btn-danger" onClick={() => removeField(index)}>X Remove</a >
                            </div>

                        </form >
                    )
                })
            }
            < button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button >
            < button type="submit" className="btn btn-warning" onClick={() => setModelVisible(false)}>Add New Field</button >

            <div role="dialog" hidden={moduleVisible}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Field</h5>
                        </div>
                        <div class="modal-body">
                            <label>Select Input Type</label>
                            <select className="form-control" onChange={e => setNewType(e.target.value)} >
                                <option value="">Select</option>
                                {expectedInputTypes.map((type) => {
                                    return <option value={type}>{type}</option>
                                })}
                            </select><br />
                            <div style={{ display: "flex" }}>
                                <input type="checkbox" style={{ width: 30 }}
                                    className="form-control"
                                    onChange={e => setNewRequired(e.target.checked)}
                                />
                                <p>Required?</p>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" onClick={addInput} disabled={newType ? false : true}>+Add</button>
                            <button type="button" class="btn btn-danger" onClick={() => setModelVisible(true)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default DynamicForm;