import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MicrophoneSensitivityMedium = (
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
      fillOpacity={0.671}
      d="M8 1C6.34 1 5 2.34 5 4v2h2V4c0-.555.445-1 1-1s1 .445 1 1v2h2V4c0-1.66-1.34-3-3-3m0 0"
    />
    <path
      fill="currentColor"
      d="M5 6v2c0 1.66 1.34 3 3 3s3-1.34 3-3V6zM2 7v1.012c0 2.965 2.164 5.43 5 5.906V16h2v-2.082c2.836-.477 5-2.941 5-5.906V7h-1.5v1.012c0 2.5-1.992 4.488-4.5 4.488s-4.5-1.988-4.5-4.488V7zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MicrophoneSensitivityMedium)
export default ForwardRef