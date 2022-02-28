import styled from "styled-components";

const AlignButton = styled.div`
    display: ${props => props.direction === 'horizontal' ? "block": "flex"}
`

export default AlignButton;