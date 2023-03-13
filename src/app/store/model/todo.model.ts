export interface TODOstring {
    todo: string | null;
}

export class TODOUpdate{
    static readonly type = '[TODO]: TODOUpdate';
    constructor(public payload: TODOstring){}
}
