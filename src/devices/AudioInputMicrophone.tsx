import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioInputMicrophone = (
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
      d="M8 0C6.34 0 5 1.34 5 3v5c0 1.66 1.34 3 3 3s3-1.34 3-3V3c0-1.66-1.34-3-3-3M2 6v2.012c0 2.965 2.164 5.43 5 5.906V16h2v-2.082c2.836-.477 5-2.941 5-5.906V6h-1.5v2.012c0 2.5-1.992 4.488-4.5 4.488s-4.5-1.988-4.5-4.488V6zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioInputMicrophone)
export default ForwardRef