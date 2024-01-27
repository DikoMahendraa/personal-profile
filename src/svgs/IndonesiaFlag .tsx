import { JSX, SVGProps } from 'react'

const IndonesiaFlag = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" {...props}>
    <path d="M0 0h30v20H0z" />
    <path fill="#ce1126" d="M1 1h28v9H1z" />
    <path fill="#fff" d="M1 10h28v9H1z" />
  </svg>
)
export default IndonesiaFlag
