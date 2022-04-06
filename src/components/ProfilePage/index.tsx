import React from 'react';

import { Container, Banner, Avatar, ProfileData,  LocationIcon, CakeIcon, Followage, EditButton} from './style';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData> 
              <EditButton outline>Editar perfil</EditButton> 

              <h1>Anderson Moura</h1>
              <h2>@AndersonMnt</h2>

              <p>
                  Developer at @NMT <a href="https://www.instagram.com/andersonmnt/">@andersonmnt</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Rio de Janeiro
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido em 05 de Fevereiro de 2000
                  </li>
              </ul>

              <Followage> 
                    <span>
                        seguindo <strong>100</strong>
                    </span>
                    <span>
                         <strong>100 </strong> seguidores
                    </span>
              </Followage>
              <Feed />
          </ProfileData>
          
      </Container>
  )
}

export default ProfilePage;