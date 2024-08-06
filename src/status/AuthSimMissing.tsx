import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AuthSimMissing = (
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
      <path
        fillOpacity={0.349}
        d="M4 0C2 0 2 2 2 2v12c0 2 2 2 2 2h8s2 0 2-2V3l-3-3zm3.754 3c.02 0 .039.012.059.012 2.16-.09 4.062 1.562 4.183 3.746l.004.027v.027c0 .047-.004.086-.008.133L12 7l-.004 1h-.121a3.1 3.1 0 0 1-.355.918c-.016.031-.04.055-.055.082h.531v2H12v2c0 1-1 1-1 1l-1.004-.004v-.984A2.013 2.013 0 0 1 8 15c-1.094 0-2-.906-2-2 0-.383.133-.71.336-1H6v-1H3.996V9H6V8h-.004v.008h-2L4 7l.008-.094c-.031-2.11 1.672-3.789 3.746-3.902zm4.242 8H10v.004h1.996zM8.664 5.133c.719.262 1.273.93 1.324 1.73 0-.004.004-.004.004-.011-.055-.797-.601-1.457-1.328-1.723zm1 6.867c.2.285.332.613.332.988V12zm-5.668.004h2v2L5 14c-1 0-1-1-1-1zm0 0"
      />
      <path d="M8.152 4.008a2.95 2.95 0 0 0-1.3.222A3 3 0 0 0 5 7h2a.99.99 0 0 1 .617-.922.99.99 0 0 1 1.09.215c.29.289.371.715.215 1.09S8.406 8 8 8c-.55 0-1 .45-1 1v2h2V9.82a3 3 0 0 0 1.77-1.672 3 3 0 0 0-.649-3.27 3 3 0 0 0-1.969-.87M8 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(AuthSimMissing)
export default ForwardRef