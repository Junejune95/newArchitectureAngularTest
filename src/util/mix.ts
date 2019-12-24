export function mix(...baseCtors: any[]) {
    return function (target: any, pkey: string) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            });
        });
    }
}
