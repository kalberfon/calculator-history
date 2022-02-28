import styled from "styled-components"


const Button = styled(({children, digit, clicked, ...props}) =>
 <button {...props} onClick={() => clicked(digit ?? children)}>{digit ?? children}</button>)`
    width: 100%;
    min-height: 60px;
`

export default Button