
import React from 'react';

import { BlogCard } from '../src/components/BlogCard/BlogCard';

export default {
  title: 'Components/Cards/Blog',
  component: BlogCard,
  argTypes : {
    variant: { options: ['primary', 'secondary', 'dark']},
  }
}

const Template = (args) => <BlogCard {...args} />;


export const Primary = Template.bind({});
  Primary.args = {
    variant: 'primary',
    content: {
      image: '/BlogCard/interior.webp',
      category: 'Category',
      title: 'Top 5 Living Room Inspirations',
      body: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    },
  }

export const Secondary = Template.bind({});
  Secondary.args = {
    ...Primary.args,
    variant: 'secondary',
  }


export const DarkMode = Template.bind({});

  DarkMode.args = {
    ...Primary.args,
    variant: 'dark',
  }
  DarkMode.parameters = {
    backgrounds: {
      default: 'dark',
    }
  }
