export function removeInTree(treeStructure, selectedValue) {
    findAndDeleteObject(treeStructure, selectedValue);
    return treeStructure;
}

function findAndDeleteObject(array, selectedValue) {
    for (let i = 0; i < array.length; i++) {
        let indexOfValue = array.findIndex(i => i._id === selectedValue._id);
        if (indexOfValue !== -1) {
            array.splice(indexOfValue, 1);
        } else {
            if (array[i]._data.length > 0) {
                findAndDeleteObject(array[i]._data, selectedValue);
            }
        }
    }
}