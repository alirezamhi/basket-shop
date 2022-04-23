const shorten = (title) => {
    const splitetitle = title.split(" ");
    const newtitle = `${splitetitle[0]} ${splitetitle[1]}`;
    return newtitle ;
}
const isCard = (state , id) => {
    const result = !!state.selecedItems.find(item=>item.id === id);
    return result;
}

const quantityconter = ( state , id ) => { 
    const index = state.selecedItems.findIndex(item=>item.id ===id);
    if(index=== -1){
        return false ;
    }else{
        return state.selecedItems[index].quantity;
    }
}

export {shorten , isCard , quantityconter};