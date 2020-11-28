export const saveCompany = (obj) =>{
    return {type:'SAVE_COMPANY',payload:obj};
}

export const addNewCompany = (obj) => {
    return {type:'SHOW_ADD_FORM', payload:obj};
}

export const editCompany = (obj) => {
    return {type:'SHOW_FORM_EDIT', payload:obj};
}

export const deletCompany = (obj) => {
    return {type:'HANDLE_DELETE', payload:obj};
}

export const showFormView = (obj) => {
    return {type:'FORM_VIEW', payload:obj};
}

export const setCompanyName = (obj) => {
    return {type:'COMPANY_NAME', payload:obj};
}

export const setCompanyId = (obj) => {
    return {type:'COMPANY_ID', payload:obj};
}

export const setManager = (obj) => {
    return {type:'MANAGER', payload:obj};
}