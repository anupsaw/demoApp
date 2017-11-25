import { MyTableHook } from '../my-table/my-table.Abstract';
export class MyTableOverrideService1 implements MyTableHook {
  callMe() {
    console.log('called by MyTableOverrideService1');
  }
}
