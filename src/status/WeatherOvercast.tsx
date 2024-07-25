import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherOvercast = (
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
      fill="#222"
      d="M-.008 8a5.95 5.95 0 0 0 5.957 5.96L11.5 14c2.492 0 4.5-2.008 4.5-4.5a4.49 4.49 0 0 0-5.727-4.328l1.204.586A5.959 5.959 0 0 0-.007 8m9.633-1.488c.191.472.71.726 1.203.586q.33-.1.672-.098C12.875 7 14 8.125 14 9.5S12.875 12 11.508 12l-5.555-.035c-2.183 0-3.96-1.781-3.96-3.965s1.777-3.965 3.96-3.96a3.96 3.96 0 0 1 3.672 2.472m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(WeatherOvercast)
export default ForwardRef