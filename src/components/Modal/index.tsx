import * as React from 'react';

import PropTypes from 'prop-types';
import colors from 'config/colors';
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding: 20px;
`;

const ModalWindow = styled.div`
    margin: auto;
    position: relative;
    border-radius: 4px;
    background-color: ${colors.WHITE};
    text-align: center;
`;

interface Props {
    children: React.ReactNode;
}

const Modal = ({ children }: Props) => (
    <ModalContainer>
        <ModalWindow>{children}</ModalWindow>
    </ModalContainer>
);

Modal.propTypes = {
    children: PropTypes.node,
};

export default Modal;
