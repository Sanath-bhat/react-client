import { combineReducers } from 'redux'

const INITIAL_STATE = { showForm: false, id: -1, companyName: '', companyId: '', manager: '', companys: [] };


const myActionReducer = (state = INITIAL_STATE, action) => {
    let companyName;
    let companyId;
    let manager;
    let id;
    let newCompanysArray = [];
    switch (action.type) {
        case 'SAVE_COMPANY':
            id = state.id;
            companyName = state.companyName;
            companyId = state.companyId;
            manager = state.manager;
            if (id === -1) {
                //add
                id = Math.random();
                newCompanysArray = [...state.companys, { id: id, companyName: companyName, companyId: companyId, manager: manager }];
            } else {
                //edit
                newCompanysArray = [...state.companys];
                const index = newCompanysArray.findIndex((obj)=>{
                    return obj.id === id
                });

                newCompanysArray.splice(index,1,{ id: id, companyName: companyName, companyId: companyId, manager: manager});
            }

            return { showForm: false, id: -1, companyName: '', companyId: '', manager: '', companys: newCompanysArray };

        case 'SHOW_ADD_FORM':
            newCompanysArray = [...state.companys];
            return { showForm: action.payload, id: -1, companyName: '', companyId: '', manager: '', companys: newCompanysArray };

        case 'SHOW_FORM_EDIT':
            id = action.payload.id;
            companyName = action.payload.companyName;
            companyId = action.payload.companyId;
            manager = action.payload.manager;
            newCompanysArray = [...state.companys];

            return { showForm: true, id: id, companyName: companyName, companyId: companyId, manager: manager, companys: newCompanysArray };
        case 'HANDLE_DELETE':
            id = action.payload.id;
            newCompanysArray = state.companys.filter((obj)=>{
                return obj.id !== id
            });
            return { showForm: false, id: -1, companyName: '', companyId: '', manager: '', companys: newCompanysArray };
        case 'FORM_VIEW':
            console.log(action.payload);
            newCompanysArray = [...state.companys];
            return { showForm: action.payload, id: -1, companyName: '', companyId: '', manager: '', companys: newCompanysArray };;
        case 'COMPANY_NAME':
            newCompanysArray = [...state.companys];
            id = state.id;
            companyId = state.companyId;
            manager = state.manager;
            return { showForm: true, id: id, companyName: action.payload, companyId: companyId, manager: manager, companys: newCompanysArray };

        case 'COMPANY_ID':
            newCompanysArray= [...state.companys];
            id = state.id;
            companyName = state.companyName;
            manager = state.manager;
            return { showForm: true, id: id, companyName: companyName, companyId: action.payload, manager: manager, companys: newCompanysArray };

        case 'MANAGER':
            newCompanysArray = [...state.companys];
            id = state.id;
            companyName = state.companyName;
            companyId = state.companyId;
            return { showForm: true, id: id, companyName: companyName, companyId: companyId, manager: action.payload, companys: newCompanysArray };
        default:
            return state;
    }

}

export default combineReducers({
    companyObject: myActionReducer
});