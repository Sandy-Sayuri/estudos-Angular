import { Action, createReducer, on } from "@ngrx/store"
import { SetTesteData } from "./teste.action"

export interface TesteState{
    data: string
}

export const initialState: TesteState ={
    data: ''
}

const _testeReducer = createReducer(
    initialState,
    on(SetTesteData,(state: TesteState, {data}) => {
        return {...data} 
    })
)

export function testeReducer(state: TesteState, action: Action){
    return _testeReducer(state,action)
}
