export function findByName(treeStructure, name, selectedObject, isCreate) {
    if (selectedObject._id === '0') {
        return treeStructure.findIndex(i => i._name === name) !== -1;
    } else {
        if (isCreate) {
            return selectedObject._data.findIndex(i => i._name === name) !== -1;
        } else {
            let tempObject = {flag: false};
            findObject(treeStructure, name, selectedObject, tempObject);
            return tempObject.flag;
        }
    }
}

function findObject(treeStructure, name, selectedObject, tempObject) {
    for (let i = 0; i < treeStructure.length; i++) {
        if (treeStructure.findIndex(i => i._id === selectedObject._id) !== -1) {
            tempObject.flag = treeStructure.findIndex(i => i._name === name) !== -1;
            break;
        } else {
            if (treeStructure[i]._data.length > 0) {
                findObject(treeStructure[i]._data, name, selectedObject, tempObject);
            }
        }
    }
}