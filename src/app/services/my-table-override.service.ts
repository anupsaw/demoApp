import { MyTableHook } from '../my-table/my-table.Abstract';
import { MyTableOverrideService1 } from './my-table-override1.service';
export class MyTableOverrideService implements MyTableHook {

  constructor() {
    // return new MyTableOverrideService();
    return new MyTableOverrideService1();
  }
  callMe() {
    console.log('called by MyTableOverrideService');
  }
}
