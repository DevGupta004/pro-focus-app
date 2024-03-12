import React from 'react';
import TaskList from './TaskList.component';

const tasks = [
  {
    title: 'Bug Fix: Home Screen',
    description: 'Fix issue with login button not appearing correctly.',
  },
  {
    title: 'Feature: Add Login Page',
    description: 'Implement user profile page with settings and preferences.',
  },
  {
    title: 'Feature: Add Login Page',
    description: 'Implement user profile page with settings and preferences.',
  },
  {
    title: 'Bug: fix Profile Page',
    description: 'Implement user profile page with settings and preferences.',
  },
  {
    title: 'Feature: Implement the social Login',
    description: 'Implement user profile page with settings and preferences.',
  },
  {
    title: 'Bug: Fix social Login',
    description: 'Implement user profile page with settings and preferences.',
  },
  {
    title: 'Bug: fix on Scroll header Bugs',
    description: 'fix on Scroll header Bugs - its should hide.',
  },
  // Add more tasks as needed
];

const Card = ({navigation}) => {
  return <TaskList tasks={tasks} navigation={navigation} />;
};

export default Card;

