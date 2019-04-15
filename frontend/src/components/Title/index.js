/* Modules */
import styled from 'styled-components';

/* Title */
const Title = styled.h1`
    font-size: 25px;
    margin: 0;
    text-transform: uppercase;
    color: ${props => props.theme.content};
    ::after {
        content: '';
        display: block;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom: 2px solid #F3F3F3;
    }
`;

export default Title;