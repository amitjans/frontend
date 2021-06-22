export interface Interaction {
    _id?: string,
    nombre: string,
    data: {
        node: object[],
        link: object[]
    }
}