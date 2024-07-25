import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Modem = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.496 0C3.598.004.336 3.012.023 6.898L0 7.188V8h15v-.5l-.023-.61c-.32-3.886-3.582-6.894-7.48-6.89M7 2.023v2.934c-.61-.09-1.25-.348-1.93-.809a5.4 5.4 0 0 1 1.586-2.085q.17-.023.344-.04m1 0c.133.012.262.032.395.051a5.34 5.34 0 0 1 1.57 2.07c-.66.454-1.313.731-1.965.82zm-3.32.75q-.24.37-.422.75-.141-.121-.281-.253c.218-.184.457-.348.703-.497m5.695.04q.347.206.652.46-.13.122-.257.239a5.4 5.4 0 0 0-.395-.7M3.27 3.98c.203.188.41.364.613.528-.266.875-.344 1.73-.371 2.492H2.023A5.47 5.47 0 0 1 3.27 3.98m8.464.004A5.5 5.5 0 0 1 12.977 7H11.52c-.024-.762-.102-1.621-.364-2.5q.29-.24.578-.516M4.75 5.125q1.137.71 2.25.844V7H4.516c.023-.602.078-1.238.234-1.875m5.54.008c.151.633.21 1.27.23 1.867H8V5.973c.797-.086 1.559-.38 2.29-.84M1 9c-.55 0-1 .45-1 1v1c0 .75.395 1.188.824 1.605.43.418.985.805 1.649 1.157C3.797 14.457 5.559 15 7.5 15s3.703-.543 5.027-1.238c.664-.352 1.22-.739 1.649-1.157S15 11.75 15 11v-1c0-.55-.45-1-1-1h-3s-.457-.016-.95.23C9.564 9.477 9 10.168 9 11v1.8c-.492.09-.977.2-1.5.2s-1.008-.11-1.5-.2V11c0-.832-.562-1.523-1.05-1.77C4.456 8.984 4 9 4 9zm1.078 2H4v1.219c-.191-.082-.43-.14-.598-.23-.523-.274-.937-.575-1.18-.813A1 1 0 0 1 2.079 11M11 11h1.922a1 1 0 0 1-.145.176c-.242.238-.656.539-1.18.812-.167.09-.406.149-.597.23zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Modem)
export default ForwardRef