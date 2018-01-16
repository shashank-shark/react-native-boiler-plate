import { call, put, all } from "redux-saga/effects";

import HTTP from "../http";

export function* get(action) {
    const getResponse = yield call(HTTP.get, action);
    console.log("getResponse", getResponse.success);

    if (getResponse) {
        if (getResponse.success) {
            yield put({
                type: action.nextActionType,
                data: getResponse.message,
            });
        } else {
            // We must have an error
            yield put({
                type: "SET_ERROR",
                errorType: "HTTP",
                message: getResponse.message,
                retryAction: {
                    type: "get",
                    data: {
                        endPoint: action.node,
                        parameters: action.parameters,
                    },
                },
            });
        }
    }
}