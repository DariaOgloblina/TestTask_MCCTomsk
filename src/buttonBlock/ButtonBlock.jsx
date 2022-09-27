import React, {useState} from 'react';
import classes from './ButtonBlock.module.css'
import {getDefaultValues, getRootObject} from "../functions/getDefaultValues";
import EditModal from "../editModal/editModal";
import {observer} from "mobx-react-lite";
import {removeInTree} from "../functions/removeInTree";

const ButtonBlock = observer(({tree, setTree, selectedValue, setSelectedValue}) => {

    const [visible, setVisible] = useState(false);
    const [isCreate, setIsCreate] = useState(true);

    function addButtonClick() {
        setIsCreate(true);
        setVisible(true);
    }

    function removeButtonClick() {

        if (selectedValue._id === '0') {
            alert('Unable to delete root folder!');
        } else {
            // eslint-disable-next-line no-restricted-globals
            let deleteAttention = confirm('You need to confirm the deletion!');
            if (deleteAttention) {
                let newArray = removeInTree(tree, selectedValue);
                setTree(newArray);
                setSelectedValue(getRootObject());
            }
        }
    }

    function editButtonClick() {
        setIsCreate(false);
        setVisible(true);
    }

    function resetButtonClick() {
        setTree(getDefaultValues());
    }

    return (
        <div>
            <hr/>
            <div className={classes.buttons}>
                <button onClick={addButtonClick}>Add</button>
                <button onClick={removeButtonClick}>Remove</button>
                <button onClick={editButtonClick}>Edit</button>
                <button onClick={resetButtonClick}>Reset</button>
            </div>
            <EditModal
                visible={visible}
                setVisible={setVisible}
                selectedValue={selectedValue}
                isCreate={isCreate}
                tree={tree}
                setTree={setTree}
            />
        </div>
    );
});

export default ButtonBlock;