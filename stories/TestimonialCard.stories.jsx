import React from 'react';

import { TestimonialCard } from '../src/components/TestimonialCard/TestimonialCard.jsx'

export default {
  title: 'Components/Cards/Testimonial',
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
    cardOverride: {
      card: {
        padding: '24px',
        width: '340px',
        height: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '#0000001f 0px 2px 3px'
      },
      nameTitle: {
        fontSize: '18px',
        lineHeight: '28px',
        color: '#171717',
        width: 'auto',
        fontWeight: '600',
      },
      nameTag: {
        width: 'auto',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#525252'
      },
      bottomCard: {
        marginTop: '16px',
        display: 'flex',
        flexWrap: 'wrap',
        color: '#525252'
      }
    },
    render: (args) => <TestimonialCard {...args} />
  }
}

export const Secondary = {
  args : {
    ...Primary.args,
    mode: 'secondary',
    label: 'outline',

    cardOverride: {
      "card": {
        "padding": "24px",
        "width": "340px",
        "height": "auto",
        "backgroundColor": "transparent",
        "borderRadius": "10px",
        "boxShadow": "#0000001f 0px 2px 3px"
      },

      "nameTitle": {
        "fontSize": "18px",
        "lineHeight": "28px",
        "color": "#171717",
        "width": "auto",
        "fontWeight": "600"
      },

      "nameTag": {
        "width": "auto",
        "fontSize": "14px",
        "lineHeight": "20px",
        "color": "#525252"
      },

      "bottomCard": {
        "marginTop": "16px",
        "display": "flex",
        "flexWrap": "wrap",
        "color": "#525252"
      }
    }
  }
  }

export const DarkMode = {
  args : {
    ...Primary.args,
    mode: 'dark',
    label: 'solid',

    cardOverride: {
      "card": {
        "padding": "24px",
        "width": "340px",
        "height": "auto",
        "backgroundColor": "#161616",
        "borderRadius": "10px",
        "boxShadow": "#0000001f 0px 2px 3px"
      },

      "nameTitle": {
        "fontSize": "18px",
        "lineHeight": "28px",
        "color": "#acacac",
        "width": "auto",
        "fontWeight": "600"
      },

      "nameTag": {
        "width": "auto",
        "fontSize": "14px",
        "lineHeight": "20px",
        "color": "#acacac"
      },

      "bottomCard": {
        "marginTop": "16px",
        "display": "flex",
        "flexWrap": "wrap",
        "color": "#acacac"
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
  }
