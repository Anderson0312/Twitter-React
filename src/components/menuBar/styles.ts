import styled, {css} from "styled-components";

import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Rocketseat} from "../../styles/icons"

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow: hidden;
    }
`;
export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width:1280px) {
        align-items:flex-direction;
    }
`;

export const Logo = styled(Rocketseat)`
    width: 41px;
    height: 41px;

    >path {
        fill: var(--twitter)
    }

    margin-bottom: 20px;
`;

export const MenuButton = styled.div`

`;

const iconCSS = css`
    flex-shrink: 0;

    width:  30px;
    height: 30px;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;

export const Bellicon = styled(Notifications)`
    ${iconCSS}
`;

export const EmailIcon = styled(Email)`
    ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
    ${iconCSS}
`;