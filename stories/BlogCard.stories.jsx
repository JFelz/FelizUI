
import React from 'react';

import { BlogCard } from '../components/BlogCard';

export default {
  title: 'Components/Cards/Blog',
  component: BlogCard,
  argTypes : {
    mode: { options: ['primary', 'secondary', 'dark']},
  }
}

export const Primary = {
  args : {
    name: 'BlogCard',
    label: 'solid',
    mode: 'primary',
    content: {
      image: '../public/BlogCard/interior.webp',
      category: 'Category',
      title: 'Top 5 Living Room Inspirations',
      body: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    },
    render: (args) => <BlogCard {...args} />
  }
};

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
