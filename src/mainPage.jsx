import React from 'react';
import ButtonBlock from "./buttonBlock/ButtonBlock";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import TreeRec from "./treeRec/TreeRec";
import {getRootObject} from "./functions/getDefaultValues";

const MainPage = observer(() => {

    const [tree, setTree] = useState([]);
    const [selectedValue, setSelectedValue] = useState(getRootObject());
    const {treeStructure} = useContext(Context);

    useEffect(() => {
        setTree(treeStructure);
    }, [treeStructure]);

    return (
        <div className='general-div'>
            <h3>Tree</h3>
            <hr/>
            <div className='div-content'>
                <p>Selected tree item: <span className='selectedValue'>{selectedValue._name}</span></p>
                <div className='root-div' onClick={() => setSelectedValue(getRootObject())}>Click to select root</div>
            </div>
            <TreeRec tree={tree} setSelectedValue={setSelectedValue}/>
            <ButtonBlock tree={tree} setTree={setTree} selectedValue={selectedValue}
                         setSelectedValue={setSelectedValue}/>
        </div>
    );
});

export default MainPage;