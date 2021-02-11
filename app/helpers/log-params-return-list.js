import { helper } from '@ember/component/helper';

export default helper(function logParamsReturnList(params/*, hash*/) {
  console.log(params);

  return params.join(', ');
});
