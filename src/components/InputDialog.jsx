import styled from "styled-components";

const rx_live = /^[+|-|*|%]?\d*(?:[.,]\d*)?$/;

const onKeydown = (event, onResult) => {
    if (event.key === '=') {
        return onResult();
    }
    if (rx_live.test(event.key)) {
        return event.key;
    }
}

const InputDialog = styled(({value, onResult, ...props}) => 
<input {...props} onChange={(event) => onKeydown(event, onResult)} value={value}/>)`
    grid-column: 1/-1;
    min-height: 28px;
    font-size: 25pt;
`

export default InputDialog;