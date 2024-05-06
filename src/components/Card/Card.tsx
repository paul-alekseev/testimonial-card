import { FC } from 'react';

import './Card.css';

type CardProps = {
  image: string;
  authorName: string;
  authorNickname: string;
  text: string;
};

export const Card: FC<CardProps> = ({
  image,
  authorName,
  authorNickname,
  text,
}) => {
  return (
    <div className="card">
      <div className="author-info">
        <img src={image} alt="Author" />
        <div className="author-names">
          <p className="name text-lg font-semibold text-primary truncate">
            {authorName}
          </p>
          <p className="nickname text-sm text-secondary truncate">
            {authorNickname}
          </p>
        </div>
      </div>
      <p className="text text-base text-secondary">{text}</p>
    </div>
  );
};
