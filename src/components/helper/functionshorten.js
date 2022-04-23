const shorten = (title) => {
    const splitetitle = title.split(" ");
    const newtitle = `${splitetitle[0]} ${splitetitle[1]}`;
    return newtitle ;
}

export {shorten};