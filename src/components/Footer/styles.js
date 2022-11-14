import styled from "styled-components";

export const StyledFooter = styled.footer`
    bottom: 0;
    position: fixed;
    display: flex;
    padding: 0 16px;
    gap: 16px;
    width: 100%;
    height: 42px;
    background-color: ${({ theme }) => theme.backgroundBase};
    border: 1px solid ${({ theme }) => theme.borderBase};
    color: ${({ theme }) => theme.textColorBase};
    align-items:center;
    justify-content:center;
    margin: auto;

    p {
        font-size: 0.9em;
    }

    a {
        font-size: 1.2em;
        color: ${({ theme }) => theme.textColorBase};
        &:hover,
        &:focus {
            opacity: 1;
            color: red;
        }
    }
`;