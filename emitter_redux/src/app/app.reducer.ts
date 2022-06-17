import { ActionReducerMap } from "@ngrx/store";

import * as fromTeste from '../app/teste.reducer'

export interface AppState{
    teste: fromTeste.TesteState
}

export const reducers: ActionReducerMap<AppState> = {
    teste: fromTeste.testeReducer
}