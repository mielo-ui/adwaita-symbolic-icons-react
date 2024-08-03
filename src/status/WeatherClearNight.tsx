import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherClearNight = (
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
      fill="#222"
      d="M.918 8.004a7.072 7.072 0 0 0 14.102.793 1.01 1.01 0 0 0-.457-.957 1 1 0 0 0-1.063-.004 3.9 3.9 0 0 1-2.031.578 3.89 3.89 0 0 1-3.883-3.883c0-.715.203-1.422.578-2.031.203-.324.2-.738-.004-1.062-.207-.32-.578-.5-.957-.458A7.07 7.07 0 0 0 .918 8.004M5.586 4.53a5.877 5.877 0 0 0 8.965 5.004l-1.52-.96a5.09 5.09 0 0 1-5.035 4.507 5.09 5.09 0 0 1-5.078-5.078 5.09 5.09 0 0 1 4.508-5.035l-.961-1.52a5.9 5.9 0 0 0-.88 3.082m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(WeatherClearNight)
export default ForwardRef