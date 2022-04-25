// code your solution here
const saturdayFun = (activity = 'roller-skate') =>
  `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = 'go to the office') =>
  `This Monday, I will ${activity}.`;

const wrapAdjective = (wrap) => {
  return (adjective) => `You are ${wrap}${adjective}${wrap}!`;
};

console.log(saturdayFun());
console.log(mondayWork());
const wrapper = wrapAdjective('*');
console.log(wrapper('adjective'));
