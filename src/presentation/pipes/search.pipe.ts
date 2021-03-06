import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        console.warn(value)
        if (!value)return null;
        if (!args)return value;

        args = args.toLowerCase();

        return value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
