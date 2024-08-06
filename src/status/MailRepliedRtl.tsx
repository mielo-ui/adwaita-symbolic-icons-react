import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailRepliedRtl = (
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
        fillOpacity={0.502}
        d="M8 .984q.152-.001.297.016h-.598Q7.85.983 8 .984m-2.309 2.11c-.414.082-.793.25-1.09.531.25-.258.606-.445 1.09-.531m-1.304.758c-.192.28-.313.59-.364.867.032-.184.09-.446.227-.719.023-.047.105-.098.137-.148m-2.29.3C1.989 4.66 2 5.02 2 5.02V13c0 .563.438 1 1 1h10c.563 0 1-.437 1-1V7.602l-4.89 3.257c-.672.45-1.547.45-2.22 0L5.099 9.668c.28-.191.515-.453.672-.754l1.675 1.117c.336.223.774.223 1.11 0l5.168-3.449c.039-.02.082-.039.125-.047a.8.8 0 0 0-.223-.207l-.078-.047 1.433-1.433A2.78 2.78 0 0 1 16 7v6c0 1.645-1.355 3-3 3H3c-1.645 0-3-1.355-3-3V7a2.79 2.79 0 0 1 1.328-2.375zm0 0"
      />
      <path d="M3 8c0 .55.45 1 1 1s1-.45 1-1V5c0-.5.2-.895 1-1h5v2h1v-.004c.266 0 .52-.105.707-.289l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 12 .008V0h-1v2H6c-1.332 0-2.277.813-2.645 1.55C2.985 4.294 3 5 3 5zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MailRepliedRtl)
export default ForwardRef