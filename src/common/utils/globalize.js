import _ from "lodash";

export default (selector, path) => globalState => {
  const state = _.get(globalState, path);
  return selector(state);
};
