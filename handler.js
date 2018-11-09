'use strict';


//the function
let TIL = [
  'Gmail first launched on April 1st, 2004. It was widely assumed the service was an April Fools Day joke!',
  'In 1825 painter Samuel Morse received a letter which read that his wife was sick. The day after that a new one said that she was dead. When 2 days later he went to his wife, he discovered that she was already buried. Pissed off for the slowness of communications, he invented the Morse code.',
  'That a full operating system and a film were stored on DNA and recovered with no errors',
  'a Harvard professor who had worked with Bill Gates called him shortly after he had left to start Microsoft. The professor recalled, "He had moved to Albuquerque... to run a small company writing code for microprocessors, of all things. I remember thinking: Such a brilliant kid. What a waste."',
  ' there is level of programming language even lower than assembly. It is simply called machine code.',
  'a typo cost NASA $80 million in 1962 when a single missing hyphen in the coding on Mariner 1 used to set trajectory and speed caused the craft to explode just minutes after takeoff.'
]

let getMsg = (list) => {
  return list[Math.floor(Math.random()*list.length)]
}



module.exports.TodayILearn = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      message: getMsg(TIL),
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
