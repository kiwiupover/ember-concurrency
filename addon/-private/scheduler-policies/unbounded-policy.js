import { STARTED } from "./desired-states";

class UnboundedRefreshState {
  step() {
    return STARTED;
  }
}

const SIMPLE_REFRESH_SINGLETON = new UnboundedRefreshState();

class UnboundedPolicy extends SchedulerPolicy {
  makeRefresh() {
    return SIMPLE_REFRESH_SINGLETON;
  }
}

export default UnboundedPolicy;