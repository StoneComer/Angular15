import {Injectable} from '@angular/core';
import {Action, Selector, State} from '@ngxs/store';
import { Actions } from '@ngxs/store/src/actions-stream';
import { StateContext } from '@ngxs/store/src/symbols';
import {TODOstring, TODOUpdate} from './model/todo.model';

@State<TODOstring>({
    name: 'TodoState',
    defaults:{
        todo:null
    }
})
@Injectable()
export class TODOState{
    @Selector()
    static getToken(state: TODOstring){
        return state;
    }
    @Action(TODOUpdate)
    updateTODOlist(ctx: StateContext<TODOstring>, action: TODOUpdate){
        ctx.patchState({
            todo: action.payload.todo
        })
    }
}