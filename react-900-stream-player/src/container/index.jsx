/**
 * 똑똑한 컨테이너 index
 * 자체적으로 state를 가질수 있고, 데이터 프로세싱을 수행한다
 *
 * index에서 각 컴포넌트들을 import 하여 묶음으로 만들고
 * 사용하는 곳에서는
 * import { GetJwtToken, LiveClock, TimeTicker, TokenRenewal } from "./container/container_index.jsx"
 * 형식으로 한꺼번에 import 하여 사용한다.
 */
// import GetJwtToken from "./GetJwtToken";
// import TimeTicker from "./TimeTicker";
import LiveClock from "./LiveClock";

import TokenRenewal from "./TokenRenewal";
export { LiveClock, TokenRenewal };
