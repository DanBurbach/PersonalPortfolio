import React from 'react';
import InterestInfo from './InterestInfo';

const masterInterestList = [
  {
  interest: 'What interests do you have?',

  relax: 'Ways that I relax: Tea, books, movies, going for a walk, listening to old radio shows like Sherlock Holmes, food, or a place with a view.',

  stimulate: 'Ways that I find stimulation: Coffee, music, theater, and new inventions and advancements that make me say WOW!',

  music: 'What kinds of music do I enjoy: Jazz, Blues, Classical, Soul, R&B, Rock, Punk...what do you have?',

  motivate: 'Ways that I find motivation: Whenever I find myself in a situation where Im thinking over and over again about something but Im just stuck, I try to do something on the other side of the spectrum. If I am stuck on a logic problem, I look to art or music. If Im stuck on a creative problem, I look to history books. If I feel the need to really just relax but stay motivated, I jump to Godzilla movies or a good B movie with some plot. When all else fails, I talk to my closest friends as a sounding board of ideas.',

  people: 'How do I do around new people or meeting new people? I love meeting people. I love hearing their story and their background. Everyone I know has something to contribute and I want to find out or figure out what that is. After all, while we may not feel like it all the time we ARE special in our own way.'
}
];

function InterestList() {
  return (
    <div>
      {masterInterestList.map((interestinfo, index) =>
        <InterestInfo
          interest={interestinfo.interest}
          relax={interestinfo.relax}
          stimulate={interestinfo.stimulate}
          music={interestinfo.music}
          motivate={interestinfo.motivate}
          people={interestinfo.people}
          key={index}/>
      )}
    </div>
  );
}

export default InterestList;
