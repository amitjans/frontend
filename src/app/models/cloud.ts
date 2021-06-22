export interface Cloud {
    service: string,
    level: number,
    status: boolean,
    keys: {
        key: string,
        value: string
    }[]
}