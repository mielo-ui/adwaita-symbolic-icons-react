import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationsScience = (
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
      fill=""
      d="M4.996 0C3.965.004 3.61 1.371 4.512 1.871L5 2.145v2.683c-.129.207-.25.39-.441.715-.27.473-.602 1.062-.965 1.707-.723 1.297-1.555 2.91-2.203 4.094-.575 1.047-.551 2.453.3 3.511.672.903 1.739 1.141 2.618 1.141h7.351c.88 0 1.95-.238 2.621-1.14.852-1.06.867-2.465.297-3.512-1.164-2.371-2.473-4.317-3.562-6.496v-2.7l.488-.277c.902-.5.547-1.871-.484-1.871zM7 2h2.016v3.105c0 .153.035.305.101.442 1.203 2.457 2.574 4.441 3.688 6.715l.015.039c.243.441.258.883-.097 1.316l-.036.043c-.144.2-.488.336-1.027.336H4.31c-.54 0-.883-.137-1.028-.336l-.035-.043c-.351-.433-.34-.875-.098-1.316.645-1.18 1.473-2.79 2.192-4.07.36-.645.687-1.231.953-1.684.262-.453.488-.813.516-.848.125-.172.191-.379.191-.59zm0 0"
    />
    <path fill="" fillOpacity={0.349} d="M6.219 9 4 13h8L9.781 9zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(ApplicationsScience)
export default ForwardRef