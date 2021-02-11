import { helper } from '@ember/component/helper';

export default helper(function hrefTo(params/*, hash*/) {
  console.log(params);

  return params;
});
