import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ToolsCheckSpelling = (
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
    <g fill="">
      <path d="M3 3.012v2h1.918c-.055 0 .086.16.086.082v.922H4C2.285 6.016.969 7.145.945 8.5c-.011.68.305 1.363.86 1.824.558.461 1.316.7 2.195.7h3.004v-5.93c0-1.172-.887-2.082-2.086-2.082zM4 8.02h1.004v1.003H4c-.52 0-.793-.136-.922-.242-.125-.105-.133-.172-.133-.242.004-.144.086-.52 1.055-.52M7.996 2v9.023H11c.938 0 1.77-.37 2.297-.96.531-.586.765-1.336.758-2.063-.012-.73-.262-1.469-.79-2.043C12.739 5.379 11.923 5 11 5H9.996V2zm2 5H11c.422 0 .625.125.785.3.164.18.266.45.27.723.004.278-.09.532-.242.7-.149.168-.356.3-.813.3H9.996zM3 11.293.645 13.645a.505.505 0 0 0 0 .71.507.507 0 0 0 .707 0L3 12.707l2 2 2-2 2 2 2-2 2 2 2.352-2.352a.505.505 0 0 0 0-.71.507.507 0 0 0-.707 0L13 13.293l-2-2-2 2-2-2-2 2zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ToolsCheckSpelling)
export default ForwardRef