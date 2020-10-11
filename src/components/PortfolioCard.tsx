import React, { FC } from 'react';
import { Card, Button } from 'semantic-ui-react';

type Props = {
  path: string;
  name: string;
  date: string;
  description: string;
  link?: string;
};

const PortfolioCard: FC<Props> = (props: Props) => {
  return (
    <>
      <Card>
        <div className="image">
          <img alt="portfolio" src={props.path}></img>
        </div>

        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.date}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
          {props.link && (
            <div className="btn-wrapper">
              <Button
                className="view-button"
                as="a"
                href={props.link}
                target="_blank"
                inverted
                size="large"
                color="blue"
              >
                View
              </Button>
            </div>
          )}
        </Card.Content>
      </Card>
    </>
  );
};

export default PortfolioCard;
