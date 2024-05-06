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
    <article className="card">
      <header className="author-info">
        <img src={image} alt={`${authorName}'s avatar`} />
        <figcaption className="author-names">
          <h3 className="name text-lg font-semibold text-primary truncate">
            {authorName}
          </h3>
          <p className="nickname text-sm text-secondary truncate">
            {authorNickname}
          </p>
        </figcaption>
      </header>
      <blockquote>
        <p className="text-base text-secondary">{text}</p>
      </blockquote>
    </article>
  );
};
