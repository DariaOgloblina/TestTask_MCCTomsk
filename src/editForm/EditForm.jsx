import React, {useEffect, useRef, useState} from 'react';
import classes from './EditForm.module.css';
import {addOrRenameInTree} from "../functions/addOrRenameInTree";
import {observer} from "mobx-react-lite";
import {findByName} from "../functions/findByName";

const EditForm = observer(({setVisible, selectedValue, isCreate, tree, setTree}) => {
    const [name, setName] = useState('');
    const [buttonName, setButtonName] = useState('');
    const inputElement = useRef(null);

    useEffect(() => {
        if (!isCreate) {
            setButtonName('Edit');
            setName(selectedValue._name);
        } else {
            setButtonName('Create');
            setName('');
        }

        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [isCreate, selectedValue])

    function editButtonClick() {
        if (name !== '') {
            let newArray
            if (!findByName(tree, name, selectedValue, isCreate)) {
                if (isCreate) {
                    newArray = addOrRenameInTree(tree, selectedValue, name, true);
                } else {
                    if (name !== selectedValue._name) {
                        newArray = addOrRenameInTree(tree, selectedValue, name, false);
                    }
                }
                setTree(newArray);
                setVisible(false);
            } else {
                alert('A folder with the same name already exists!');
            }
        } else {
            alert('You didn\'t enter anything!');
        }
    }

    return (
        <div>
            <h3>Enter the title</h3>
            <hr/>
            {isCreate && <p>Add Into {selectedValue._name}</p>}
            <input
                placeholder='Enter the title'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={inputElement}
            />
            <br/>
            <button className={classes.editButton} onClick={editButtonClick}>{buttonName}</button>
        </div>
    );
});

export default EditForm;