import React from 'react';

import { TestimonialCard } from '../components/TestimonialCard.jsx'

export default {
  title: 'Cards/TestimonialCard',
  component: TestimonialCard,
};

export const Primary = {
  args : {
    name: 'TestimonialCard',
    label: 'solid',
    primary: true,
    firstName: 'Sarah',
    lastName: 'Dole',
    userTag: 'sarahdole',
    content: {
      body: 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding!'
    }
  },
  render: (args) => <TestimonialCard {...args} />
}

export const Secondary = {
  args : {
    ...Primary.args,
    primary: false,
    label: 'outline'
  }
  }

export const DarkMode = {
  args : {
    ...Primary.args,
    primary: false,
    label: 'outline'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
  }
