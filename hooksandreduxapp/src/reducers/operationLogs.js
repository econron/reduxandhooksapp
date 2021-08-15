import {
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
}
from '../actions';

const operationLogs = (state = [], action) => {
    switch(action.type){
        case ADD_OPERATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            // 追加された順に上からappendされて欲しいので　スプレッド構文で前にoperationLogを追加する。
            // 配列の先頭に配置する。
            return [operationLog, ...state];
        case DELETE_ALL_OPERATION_LOGS:
            return [];  
        default:
            return state;      
    }
}

export default operationLogs;