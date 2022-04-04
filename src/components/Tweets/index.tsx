import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Contant, Header,  Dot, Description, ImageContent,  Icons, Status,  CommentIcon, RetweetIcon, LikedIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retwetou
        </Retweeted>

        <Body>
            <Avatar />

            <Contant>
                <Header>
                    <strong>Rocketseat</strong>
                    <span>@rocketseat</span>
                    <Dot />
                    <time>04 de abril</time>
                </Header>

                <Description>Foguete não tem ré</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        18
                    </Status>
                    <Status>
                        <LikedIcon />
                        200
                    </Status>
                </Icons>
            </Contant>
        </Body>
    </Container>
    )
}

export default Tweet;