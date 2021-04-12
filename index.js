 function getAllNotes() {
    let localData =  localStorage.getItem("notes");
    let allNotes = localData ? JSON.parse(localData) : [];
    return allNotes;
}
