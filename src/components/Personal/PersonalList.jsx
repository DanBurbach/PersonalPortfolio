import React from 'react';
import PersonalInfo from './PersonalInfo';

const masterPersonalList = [
  {
    who:'Coming from a background in theater',
    where:'',
    thoughts:'',
    creativity:'',
    focus:''
  }
];

function PersonalList() {
  return (
    <div>
      {masterPersonalList.map((personalinfo, index) =>
        <PersonalInfo
          who={personalinfo.who}
          where={personalinfo.where}
          thoughts={personalinfo.thoughts}
          creativity={personalinfo.creativity}
          focus={personalinfo.focus}
          key={index}/>
      )}
    </div>
  );
}

export default PersonalList;
