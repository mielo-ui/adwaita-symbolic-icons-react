import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MicrophoneSensitivityMuted = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path
        fillOpacity={0.671}
        d="M8 1C6.34 1 5 2.34 5 4v4a2.996 2.996 0 0 0 4.016 2.82 1.981 1.981 0 0 1 1.805-1.809C10.933 8.696 11 8.356 11 8V4c0-1.66-1.34-3-3-3m0 2c.555 0 1 .445 1 1v4c0 .555-.445 1-1 1s-1-.445-1-1V4c0-.555.445-1 1-1M2 7v1.012c0 2.965 2.164 5.422 5 5.898V16h2v-2.09q.192-.033.383-.078.086-.129.203-.246l.414-.414v-.344l-.414-.414a1.5 1.5 0 0 1-.145-.164A4.466 4.466 0 0 1 3.5 8.012V7zm10.5 0v1.012c0 .504-.09.98-.246 1.43.055.042.11.093.16.144l.414.414h.344l.414-.414c.078-.078.16-.145.246-.211q.167-.659.168-1.363V7zm0 0"
      />
      <path d="M11 10a1 1 0 0 0-.707 1.707L11.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L13 14.414l1.293 1.293a1 1 0 1 0 1.414-1.414L14.414 13l1.293-1.293a1 1 0 1 0-1.414-1.414L13 11.586l-1.293-1.293A1 1 0 0 0 11 10m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MicrophoneSensitivityMuted)
export default ForwardRef