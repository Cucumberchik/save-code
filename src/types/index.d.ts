interface ReactChildren {
    children: ReactNode
}

interface ElementType {
    date: string,
    code: string,
    note: string,
}

interface UserType {
    _id?:number,
    uid:string,
    todo:ElementType[]
}

interface TodoObjType  {
    code:string,
    date: Date,
    language:string,
    title: string
}