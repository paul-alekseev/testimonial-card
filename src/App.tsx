import { FC } from 'react';

import thumbnail from './images/profile-thumbnail.png';

import './App.css';
import { Card } from './components/Card/Card';

const App: FC = () => {
  return (
    <div className="app">
      <Card
        image={thumbnail}
        authorName="Sarah Dole"
        authorNickname="@sarahdole"
        text="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
      />
    </div>
  );
};

export default App;
