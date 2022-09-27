import TreeStore from "../store/treeStore";

export function addOrRenameInTree(treeStructure, selectedValue, newName, isCreate= true){
    let newArray = [];
    if(selectedValue._name === 'root'){
        newArray.push(...treeStructure, new TreeStore(String(Date.now()), newName));
    }else {
        for (let i = 0; i < treeStructure.length; i++) {
            let templateObject = getFiniteValue(treeStructure[i], selectedValue, newName, isCreate);
            if(templateObject){
                newArray.push(templateObject);
            }else {
                newArray.push(treeStructure[i]);
            }
        }
    }
    return newArray;
}

function getFiniteValue(object, selectedValue, newName, isCreate) {

    getProp(object, selectedValue, newName);

    function getProp(obj, selectedValue, newName) {
        for(let prop in obj) {
            if(typeof(obj[prop]) === 'object') {
                getProp(obj[prop], selectedValue, newName);
            } else {
                if(obj._id === selectedValue._id){
                    if(isCreate){
                        const idString = obj._id + '.' + Date.now();
                        obj.setData([...obj._data, new TreeStore(idString, newName)]);
                    }else {
                        obj.setName(newName);
                    }
                    break;
                }
            }
        }
    }
    return object;
}