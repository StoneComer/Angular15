export interface TODOstring {
    todo: string | null;
}

export class TODOUpdate{
    static readonly type = '[TODO]: TODO Update';
    constructor(public payload: TODOstring){}
}
