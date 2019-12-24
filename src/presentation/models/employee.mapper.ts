import {EmployeeModel} from './employee.model';
import {Mapper} from '@models/./mapper';

export class EmployeeMapper extends Mapper<EmployeeModel> {
    protected mapFrom(item): EmployeeModel {
        return item;
    }
}
