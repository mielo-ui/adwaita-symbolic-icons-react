import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MicrophoneHardwareDisabled = (
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
    <path
      fill="currentColor"
      fillOpacity={0.349}
      d="M8 1C6.34 1 5 2.34 5 4v1h6V4c0-1.66-1.34-3-3-3M2.8 11A6.03 6.03 0 0 0 7 13.918V16h2v-2.082A6.03 6.03 0 0 0 13.2 11h-1.833c-.82.922-2.02 1.5-3.367 1.5s-2.547-.578-3.367-1.5zm0 0"
    />
    <path fill="currentColor" d="M0 6h16v4H0zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(MicrophoneHardwareDisabled)
export default ForwardRef