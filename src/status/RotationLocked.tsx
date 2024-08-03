import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const RotationLocked = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={16.02} ref={ref} {...props}>
    <g fill="currentColor">
      <path
        fillOpacity={0.349}
        d="M6.977 0c-.801.008-1.594.313-2.204.91L2 3.617V3.02c0-.551-.45-1-1-1s-1 .449-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-.574L6.18 2.313c.367-.36 1.246-.368 1.601-.02l5.52 5.437a.99.99 0 0 0 1.41-.011.995.995 0 0 0-.008-1.41L9.183.89A3.13 3.13 0 0 0 6.978 0M2.03 8.02a.99.99 0 0 0-.742.3.995.995 0 0 0 .008 1.41l5.484 5.38c.614.605 1.422.867 2.219.878v-1.976c-.34-.012-.656-.149-.816-.305l-5.48-5.398a1 1 0 0 0-.552-.278c-.043-.008-.082-.008-.12-.011m0 0"
      />
      <path d="M13 9.02c-1.098 0-2 .902-2 2v1h-1v4h6v-4h-1v-1c0-1.098-.902-2-2-2m0 1c.563 0 1 .437 1 1v1h-2v-1c0-.563.438-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(RotationLocked)
export default ForwardRef