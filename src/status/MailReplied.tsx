import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailReplied = (
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
      <path
        fillOpacity={0.502}
        d="M8 .984Q7.848.983 7.7 1h.6A3 3 0 0 0 8 .984m2.309 2.11c.414.082.793.25 1.09.531-.25-.258-.606-.445-1.09-.531m1.304.758c.192.28.313.59.364.867A2.6 2.6 0 0 0 11.75 4c-.023-.047-.105-.098-.137-.148m2.29.3c.109.508.097.868.097.868V13c0 .563-.437 1-1 1H3c-.562 0-1-.437-1-1V7.602l4.89 3.257c.673.45 1.548.45 2.22 0l1.792-1.191a2.04 2.04 0 0 1-.672-.754l-1.675 1.117a1.005 1.005 0 0 1-1.11 0L2.277 6.582a.5.5 0 0 0-.125-.047.8.8 0 0 1 .223-.207l.078-.047L1.02 4.848A2.78 2.78 0 0 0 0 7v6c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7a2.79 2.79 0 0 0-1.328-2.375zm0 0"
      />
      <path d="M13 8c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.5-.2-.895-1-1H5v2H4v-.004c-.266 0-.52-.105-.707-.289l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 4 .008V0h1v2h5c1.332 0 2.273.813 2.645 1.55C13.015 4.294 13 5 13 5zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MailReplied)
export default ForwardRef