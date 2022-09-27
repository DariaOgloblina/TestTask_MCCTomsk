import React from 'react';
import classes from "./TreeRec.module.css";
import {getObjectById} from "../functions/getObjectById";

const TreeRec = ({tree, setSelectedValue}) => {
    return (
        <div>
            {tree.map((option) =>
                <div
                    className={classes.treeItemDiv}
                    id={option._id}
                    key={option._id}
                    onClick={(e) => {
                        const objectId = e.target.id ? e.target.id : e.target;
                        if (typeof objectId !== "object") {
                            setSelectedValue(getObjectById(objectId, tree));
                        }
                    }}>
                    {option._name}
                    {option._data.length > 0 &&
                        <TreeRec tree={option._data}
                                 setSelectedValue={setSelectedValue}/>
                    }
                </div>
            )}
        </div>
    );
};

export default TreeRec;