import React from 'react';

import { TestimonialCard } from '../components/TestimonialCard.jsx'

export default {
  title: 'Components/Cards/TestimonialCard',
  component: TestimonialCard,
  argTypes : {
    mode: { options: ['primary', 'secondary', 'dark']},
  }
};

export const Primary = {
  args : {
    name: 'TestimonialCard',
    label: 'solid',
    mode: 'primary',
    user: {
      firstName: 'Jessica',
      lastName: 'Siles',
      userTag: 'sillysiles',
    },
    content: {
      body: 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding!'
    },
    render: (args) => <TestimonialCard {...args} />
  }
}

export const Secondary = {
  args : {
    ...Primary.args,
    mode: 'secondary',
    label: 'outline'
  }
  }

export const DarkMode = {
  args : {
    ...Primary.args,
    mode: 'dark',
    label: 'solid'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
  }
