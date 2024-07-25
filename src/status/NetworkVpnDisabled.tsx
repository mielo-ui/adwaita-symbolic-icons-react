import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkVpnDisabled = (
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
      <path d="M7.918 1A2.91 2.91 0 0 0 5 3.918V5a1 1 0 0 0-.664.277L10.063 11h.906c.57 0 1.031-.46 1.031-1.031V6.03A1.014 1.014 0 0 0 11 5V3.918A2.91 2.91 0 0 0 8.082 1zM8 3c.555 0 1 .445 1 1v1H7V4c0-.555.445-1 1-1M4 7.063v2.906C4 10.539 4.46 11 5.031 11H7v1.219c-.316.18-.578.441-.758.758H2.996c-.55 0-1 .449-1 1s.45 1 1 1h3.285c.364.601 1.012.972 1.715.972s1.356-.37 1.719-.972h2.2l-2-2H9.75a2.04 2.04 0 0 0-.75-.754v-.16zm3.996 5.875c.555 0 1.008.449 1.004 1.003a1 1 0 0 1-1.004 1.008 1.007 1.007 0 1 1 0-2.012m4.043.039 1.68 1.683a.98.98 0 0 0 .289-.683c0-.551-.45-1-1-1zm0 0" />
      <path d="M1.531.457.47 1.52l14 14 1.062-1.063zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkVpnDisabled)
export default ForwardRef