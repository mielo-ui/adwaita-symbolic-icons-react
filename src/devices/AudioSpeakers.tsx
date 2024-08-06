import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioSpeakers = (
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
      d="M12.04.004a.95.95 0 0 0-.727.281L8 3.578V5h1.39l3.305-3.3c.407-.403.36-1.04.032-1.391a1.03 1.03 0 0 0-.688-.305M7 1.008a.99.99 0 0 0-.77.351L3 5H2C.906 5 0 5.844 0 7v2c0 1.09.91 2 2 2h1l3.23 3.64c.211.255.493.364.77.36zM8 7v2h6c.75 0 1-.5 1-1s-.25-1-1-1zm0 4v1.422l3.324 3.293c.403.41 1.063.347 1.414-.024a1.02 1.02 0 0 0-.031-1.39L9.391 11zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioSpeakers)
export default ForwardRef