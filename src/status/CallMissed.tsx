import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CallMissed = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M12.98-.012 12.867 0H8v.832a1 1 0 0 0 .227.82c.191.223.476.352.773.348h1.586L8 4.586 5.707 2.293a.99.99 0 0 0-.973-.273.99.99 0 0 0-.714.714.99.99 0 0 0 .273.973l3 3a1 1 0 0 0 1.414 0L12 3.414V5a.998.998 0 0 0 1.156 1H14V1.125c.012-.09.012-.184 0-.273V0h-.855a1 1 0 0 0-.165-.012m0 0"
    />
    <path
      fill="#e01b24"
      d="M14.242 15.715a.98.98 0 0 1-1.387 0l-1.042-1.04-1.04-1.042a.98.98 0 0 1 0-1.387l.493-.492a6.83 6.83 0 0 0-6.532 0l.493.492a.98.98 0 0 1 0 1.387l-1.04 1.043-1.042 1.039a.98.98 0 0 1-1.387 0l-1.04-1.04a2.454 2.454 0 0 1 0-3.468l.348-.348c3.817-3.816 10.051-3.816 13.868 0l.347.348a2.454 2.454 0 0 1 0 3.469zm0 0"
      className="prefix__error"
    />
  </svg>
)
const ForwardRef = forwardRef(CallMissed)
export default ForwardRef