import styled from 'styled-components';

const AuthStyles = styled.section`
    display: grid;
    align-items: center;

    .logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 1.38rem;
    }

    .form {
        max-width: 400px;
        border-top: 5px solid var(--primary-500);
        width: 90vw;
        background: var(--white);
        border-radius: var(--borderRadius);
        box-shadow: var(--shadow-2);
        padding: 2rem 2.5rem;
        margin: 3rem auto;
        transition: var(--transition);
    }
    .form:hover {
        box-shadow: var(--shadow-4);
    }

    .form-row {
        margin-bottom: 1rem;
    }

    .form-label {
        display: block;
        font-size: var(--smallText);
        margin-bottom: 0.5rem;
        text-transform: capitalize;
        letter-spacing: var(--letterSpacing);
    }

    .form-input {
        width: 100%;
        height: 35px;
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        background: var(--backgroundColor);
        border: 1px solid var(--grey-200);
    }

    h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
    }

    .btn {
        margin-top: 1rem;
    }

    .member-btn {
        background: transparent;
        border: transparent;
        color: var(--primary-500);
        cursor: pointer;
        letter-spacing: var(--letterSpacing);
    }
`
export { AuthStyles };