import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import { ExitBtn, ExitContainer, HeaderContainer } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalLogoutOpen } from 'redux/global/globalSelectors';

import { ModalLogOut } from 'components/ModalLogOut/ModalLogOut';
import { openModalLogout } from 'redux/global/globalSlice';
// import { IoExitOutline } from 'react-icons/io';
// <IoExitOutline />;

export const Header = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalLogoutOpen);

  return (
    <header>
      <HeaderContainer>
        <Link href="/DontTouchMyState">
          <Logo />
        </Link>

        <ExitContainer>
          <span>Name</span>
          <div>
            <span>
              <ExitBtn
                type="button"
                onClick={() => dispatch(openModalLogout())}
              >
                Exit
              </ExitBtn>
              {isModalOpen && <ModalLogOut />}
            </span>
          </div>
        </ExitContainer>
      </HeaderContainer>
    </header>
  );
};
