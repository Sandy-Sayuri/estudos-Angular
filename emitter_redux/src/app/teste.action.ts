import { createAction, props } from "@ngrx/store"

export const SET_DATA = '[TESTE] Setar dados'

export const SetTesteData = createAction(
    SET_DATA, 
    props<{data:any}>()
)