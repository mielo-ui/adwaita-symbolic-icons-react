import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioSpeakersRtl = (
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
      d="M3.96.004a1.03 1.03 0 0 0-.687.305c-.332.351-.375.988.032 1.39L6.609 5H8V3.578L4.688.285A.95.95 0 0 0 3.96.004M9 1.008V15a.95.95 0 0 0 .766-.36L13 11h1c1.09 0 2-.91 2-2V7c0-1.156-.906-2-2-2h-1L9.766 1.36A.98.98 0 0 0 9 1.007M2 7c-.75 0-1 .5-1 1s.25 1 1 1h6V7zm4.61 4-3.317 3.3a1.016 1.016 0 0 0-.027 1.391c.347.371 1.007.434 1.41.024L8 12.422V11zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioSpeakersRtl)
export default ForwardRef