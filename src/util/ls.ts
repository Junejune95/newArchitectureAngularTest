export class Ls {
    static set(key: string, value: any) {
        if (typeof value === "object")
            value = JSON.stringify(value)

        localStorage.setItem(key, value)
    }

    static get(key: string, shouldParseToJSON: boolean = true) : any | null {
        const item = localStorage.getItem(key)

        return item ? shouldParseToJSON ? JSON.parse(item) : item : null
    }

    static delete(key: string) {
        localStorage.removeItem(key)
    }

    static clear() {
        localStorage.clear()
    }
}
