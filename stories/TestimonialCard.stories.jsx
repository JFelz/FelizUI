
import { background } from 'storybook/internal/theming';
import { TestimonialCard } from '../components/TestimonialCard.jsx'

export default {
  title: 'Cards/TestimonialCard',
  component: TestimonialCard,
};

export const Primary = {
  args : {
    name: 'TestimonialCard',
    label: 'Solid',
    primary: true
  }
}

export const Secondary = {
  args : {
    ...Primary.args,
    primary: false,
    label: 'Outline'
  }
  }

// export const DarkMode = {
//   args : {
//     ...Primary.args,
//     primary: false,
//     label: 'Outline'
//   },
//   parameters: {
//     backgrounds: {
//       default: 'dark'
//     }
//   }
//   }
