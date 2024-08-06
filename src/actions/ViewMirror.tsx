import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewMirror = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M2 0C1.14 0 .57.32.29.7c-.286.378-.29.8-.29.8v13s.004.422.29.8c.28.38.85.7 1.71.7.11 0 .219-.035.305-.105l5.5-4.25A.49.49 0 0 0 8 11.25V4.5a.5.5 0 0 0-.207-.406l-5.5-4A.5.5 0 0 0 2 0m0 1.117 5 3.64v6.247l-5 3.863zm0 0" />
      <path
        fillOpacity={0.349}
        d="M14 0a.54.54 0 0 0-.297.094l-5.5 4A.5.5 0 0 0 8 4.5v6.75c0 .156.07.3.191.395l5.5 4.25A.5.5 0 0 0 14 16c.86 0 1.43-.32 1.715-.7.281-.378.285-.8.285-.8v-13s-.004-.422-.285-.8C15.43.32 14.859 0 14 0m0 1.117v13.75l-5-3.863V4.758zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewMirror)
export default ForwardRef