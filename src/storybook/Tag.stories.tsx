import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { within, userEvent } from '@storybook/testing-library';
import { Tag } from '../modules/components/Tag'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'XDR/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'var(--xdrsec-tag-primary-color)',
  bgColor: 'var(--xdrsec-tag-primary-background-color)',
  children: '剧本处置😀 😎 👍 💯剧本处置😀 😎 👍 💯',
  'data-testid' : 'primary'
}

Primary.play = async ({ canvasElement }) => {
  const canvas= within(canvasElement);
  const primaryTag = canvas.getByTestId("primary")
  await userEvent.hover(primaryTag)
};

export const FourthTag = Template.bind({})
FourthTag.args = {
  color: 'var(--xdrsec-tag-fourth-color)',
  bgColor: 'var(--xdrsec-tag-fourth-background-color)',
  borderColor: 'var(--xdrsec-tag-fourth-border-color)',
  children: '告警处置',
  onClick: linkTo('xdr-tag--fifth-tag')
}

export const FifthTag: ComponentStory<typeof Tag> = props => (
  <Tag
    color={'var(--xdrsec-tag-fifth-color)'}
    bgColor={'var(--xdrsec-tag-fifth-background-color)'}
    borderColor={'var(--xdrsec-tag-fifth-border-color)'}
    onClick={action('clicked')}
    {...props}
  >
    日常运维
  </Tag>
)
