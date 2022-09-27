import React from 'react';
import EditForm from "../editForm/EditForm";
import classes from './EditModal.module.css';

const EditModal = ({visible, setVisible, selectedValue, isCreate, tree, setTree}) => {
    const rootClasses = [classes.editModal];
    if (visible === true) {
        rootClasses.push(classes.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.editModalContent} onClick={(e) => e.stopPropagation()}>
                <EditForm setVisible={setVisible} selectedValue={selectedValue} isCreate={isCreate} tree={tree}
                          setTree={setTree}/>
            </div>
        </div>
    );
};

export default EditModal;