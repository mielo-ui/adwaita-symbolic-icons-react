import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationXAppliance = (
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
      d="M2 0C.895 0 0 .895 0 2c.004.71.383 1.371 1 1.727v8.546A2 2 0 0 0 0 14c0 1.105.895 2 2 2a2 2 0 0 0 1.727-1h8.546A2 2 0 0 0 14 16a1.999 1.999 0 0 0 1-3.73V3.727A2 2 0 0 0 16 2c0-1.105-.895-2-2-2a2 2 0 0 0-1.727 1H3.73A2 2 0 0 0 2 0m1.727 3h8.546q.011.023.028.047l-1.125 1.117A1.46 1.46 0 0 0 10.5 4c-.633 0-1.2.402-1.41 1H6.91c-.215-.602-.777-1-1.41-1-.223 0-.441.05-.645.148L3.72 3.012c.004-.004.004-.008.008-.012m-.715.719 1.136 1.136a1.55 1.55 0 0 0-.148.66c0 .641.402 1.212 1 1.426V9.09a1.5 1.5 0 0 0-.855 2.055l-1.13 1.132c-.003-.004-.011-.004-.015-.007V3.727q.006-.007.012-.008M13 3.762v8.511q-.006.004-.012.008l-1.133-1.133A1.5 1.5 0 0 0 11 9.086V6.91c.598-.21 1-.777 1-1.41 0-.21-.047-.422-.133-.613zM6.918 6H9.09a1.5 1.5 0 0 0 .91.91v2.18a1.5 1.5 0 0 0-.91.91H6.914A1.51 1.51 0 0 0 6 9.086V6.94c.434-.156.77-.503.918-.941m-.008 5h2.18a1.5 1.5 0 0 0 2.055.855l1.136 1.133q-.004.006-.008.012H3.73c-.003-.004-.003-.012-.007-.016l1.129-1.129A1.499 1.499 0 0 0 6.91 11m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ApplicationXAppliance)
export default ForwardRef