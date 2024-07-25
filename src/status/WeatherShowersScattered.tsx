import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherShowersScattered = (
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
      d="M4 .762c-.477 0-.973.183-1.332.597-.145.172-.781.93-1.398 1.954C.648 4.332 0 5.605 0 7a4.06 4.06 0 0 0 1.004 2.707C1.527 10.301 2.543 11 4 11c1.238 0 2.3-.508 2.984-1.273A4.08 4.08 0 0 0 8 7c0-1.395-.645-2.668-1.27-3.687a16 16 0 0 0-1.402-1.954A1.75 1.75 0 0 0 4 .762m0 2.164c.203.246.574.687 1.023 1.422C5.555 5.227 6 6.3 6 7c0 .516-.184 1.031-.508 1.39C5.168 8.755 4.73 9 4 9c-.86 0-1.25-.34-1.5-.621A2.06 2.06 0 0 1 2 7c0-.7.445-1.773.977-2.652.449-.735.82-1.176 1.023-1.422m8 1.836c-.477 0-.973.183-1.332.597-.145.172-.781.93-1.398 1.953C8.648 8.333 8 9.606 8 11a4.06 4.06 0 0 0 1.004 2.707C9.527 14.301 10.543 15 12 15c1.238 0 2.3-.508 2.984-1.273A4.08 4.08 0 0 0 16 11c0-1.395-.645-2.668-1.27-3.687a16 16 0 0 0-1.402-1.954A1.75 1.75 0 0 0 12 4.762m0 2.164c.203.246.574.687 1.023 1.422C13.555 9.227 14 10.3 14 11c0 .516-.184 1.031-.508 1.395-.324.359-.762.605-1.492.605-.86 0-1.25-.34-1.5-.617A2.08 2.08 0 0 1 10 11c0-.7.445-1.773.977-2.652.449-.735.82-1.176 1.023-1.422m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(WeatherShowersScattered)
export default ForwardRef