import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PreferencesSystem = (
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
      d="m13.855 0-1.539 1.438c-.453.421-.53 1.148-.27 1.707L6.16 9.14H6.13a1.5 1.5 0 0 0-.84-.149c-.328.047-.633.2-.867.442L.477 13.43a1.486 1.486 0 0 0 .675 2.515 1.49 1.49 0 0 0 1.453-.425l3.946-3.997a1.475 1.475 0 0 0 .297-1.738l5.89-5.965c.559.25 1.274.149 1.707-.289L15.86 1.97zM3.547.09a3.5 3.5 0 0 0-1.14.219l1.882 1.879c.39.382.39 1 0 1.386l-.71.707a.98.98 0 0 1-1.392 0L.305 2.402a3.5 3.5 0 0 0-.22 1.141 3.46 3.46 0 0 0 3.462 3.453c.402 0 .789-.094 1.144-.219L5.867 7.95h.059l2.07-2.062-1.203-1.203c.125-.36.215-.743.215-1.141A3.456 3.456 0 0 0 3.547.09m6.55 7.89-2.07 2.067a1 1 0 0 1 .032.09l1.144 1.14a3.5 3.5 0 0 0-.219 1.141c0 1.902 1.551 3.45 3.461 3.45.434 0 .856-.102 1.239-.247l-2.008-2a1.01 1.01 0 0 1 0-1.418l.68-.68c.195-.191.457-.308.71-.308s.516.117.711.308l1.946 1.942c.105-.328.183-.684.183-1.047a3.456 3.456 0 0 0-3.46-3.453 3.5 3.5 0 0 0-1.141.219zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(PreferencesSystem)
export default ForwardRef