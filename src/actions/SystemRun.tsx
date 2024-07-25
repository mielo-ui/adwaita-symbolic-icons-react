import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemRun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M9.5.5c-.55 0-1 .45-1 1a1 1 0 0 0 .016.098c-.004.004-.012.004-.016.004a.566.566 0 0 1-.371.683.57.57 0 0 1-.7-.332q0-.001-.007.004a1 1 0 0 0-.055-.09 1 1 0 0 0-1.394-.219 1 1 0 0 0-.223 1.395q.036.04.074.074-.001.006-.008.012a.565.565 0 0 1-.664.91q.001.002-.004.004-.046-.022-.093-.04a.9.9 0 0 0-.282-.046.99.99 0 0 0-.98.691 1 1 0 0 0 .64 1.258 1 1 0 0 0 .102.016q.001.005-.004.016a.56.56 0 0 1 .535.562c0 .3-.238.543-.535.563q.005.004.004.015a1 1 0 0 0-.101.016 1.001 1.001 0 0 0 .62 1.902q.048-.017.094-.039.005.004.004.008a.56.56 0 0 1 .598-.008.56.56 0 0 1 .063.914l.011.012q-.036.034-.074.074a1 1 0 1 0 1.672 1.09q.004-.001.008.004a.556.556 0 0 1 .699-.332c.289.09.45.394.371.68q.011 0 .016.003-.011.05-.016.098c0 .55.45 1 1 1s1-.45 1-1c0-.035-.004-.066-.008-.102h.004a.57.57 0 0 1 .375-.683.54.54 0 0 1 .223-.024.55.55 0 0 1 .472.36q.011-.007.016-.008l.047.09c.328.445.953.547 1.398.222a1 1 0 0 0 .22-1.398 1 1 0 0 0-.075-.074q.006-.004.012-.008a.57.57 0 0 1-.098-.77.56.56 0 0 1 .758-.144l.011-.012q.043.024.09.047a1.001 1.001 0 0 0 .621-1.902c-.035-.008-.066-.012-.101-.02q-.001-.006.004-.011a.57.57 0 0 1-.535-.567c0-.297.238-.539.535-.558-.004-.004-.004-.012-.004-.016a1 1 0 0 0 .101-.016c.524-.172.813-.734.641-1.261a.99.99 0 0 0-.98-.688.9.9 0 0 0-.282.047q-.046.024-.09.047l-.011-.016a.56.56 0 0 1-.758-.144.566.566 0 0 1 .098-.766q-.006-.001-.012-.008a1 1 0 0 0 .074-.074 1 1 0 0 0-.219-1.398 1.01 1.01 0 0 0-1.398.223l-.047.089c-.004 0-.008-.004-.012-.004a.565.565 0 0 1-1.074-.352h-.004c.004-.035.008-.066.008-.101 0-.55-.45-1-1-1m0 3.5C10.879 4 12 5.121 12 6.5S10.879 9 9.5 9 7 7.879 7 6.5 8.121 4 9.5 4m-7.012 6c-1.367 0-2.5 1.133-2.5 2.5s1.133 2.5 2.5 2.5 2.5-1.133 2.5-2.5-1.133-2.5-2.5-2.5m0 2c.29 0 .5.21.5.5s-.21.5-.5.5c-.289 0-.5-.21-.5-.5s.211-.5.5-.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemRun)
export default ForwardRef