import { helper } from '@ember/component/helper';

export default helper(function logReturn([params]/*, hash*/) {
  console.log(`log return: ${params}`);
  return params;
});
