import React from 'react';

import { Container, Topside, Logo, MenuButton,HomeIcon,Bellicon,EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar, ProfileData , ExitIcon } from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />

              <MenuButton>
                  <HomeIcon />
                  <span>Pagina inicial</span>
              </MenuButton>
              <MenuButton>
                  <Bellicon />
                  <span>Notificações</span>
              </MenuButton>
              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuButton>
              <MenuButton>
                  <FavoriteIcon />
                  <span>Favoritos</span>
              </MenuButton>
              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Tweetar </span>
              </Button>
          </Topside>

          <Botside> 
              <Avatar />

              <ProfileData>
                  <strong>AndersonM</strong>
                  <span>@AndersonMnt</span>
              </ProfileData>

              <ExitIcon />
          </Botside>
      </Container>
  )
}

export default MenuBar;