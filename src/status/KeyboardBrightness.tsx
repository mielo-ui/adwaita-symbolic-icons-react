import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const KeyboardBrightness = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 3c-.555 0-1 .445-1 1v1c0 .555.445 1 1 1s1-.445 1-1V4c0-.555-.445-1-1-1M3 5.05a.97.97 0 0 0-.66.294 1 1 0 0 0 0 1.414l.719.719a1 1 0 1 0 1.414-1.414l-.72-.72A.98.98 0 0 0 3 5.052m9.95 0a1 1 0 0 0-.708.294l-.719.719a1 1 0 1 0 1.414 1.414l.72-.72a1 1 0 0 0-.708-1.706M6.245 9a.42.42 0 0 0-.375.262l-.836 2.218c-.101.23.125.528.402.52h5.137c.278.008.5-.29.403-.52l-.836-2.218c-.075-.192-.34-.309-.551-.235-.211.067-.82.262-1.586.262s-1.375-.195-1.586-.262A.4.4 0 0 0 6.246 9M1 10c-.555 0-1 .445-1 1s.445 1 1 1h.973c.554 0 1-.445 1-1s-.446-1-1-1zm12.984 0c-.554 0-1 .445-1 1s.446 1 1 1H15c.555 0 1-.445 1-1s-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(KeyboardBrightness)
export default ForwardRef