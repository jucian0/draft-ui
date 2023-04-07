import { RadioGroup } from '../../RadioGroup/src/RadioGroup'
import { Radio } from '../src/Radio'
import { type StoryObj, type Meta } from '@storybook/react'

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
}

export default meta

export const Default: StoryObj<typeof Radio> = (props) => (
  <RadioGroup isDisabled={props.isDisabled}>
    <Radio size={props.size} value="cat">
      Cat
    </Radio>
    <Radio size={props.size} value="dog">
      Dog
    </Radio>
  </RadioGroup>
)

Default.argTypes = {
  size: {
    type: 'string',
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
  isDisabled: { type: 'boolean' },
}

Default.args = {
  size: 'md',
  isDisabled: false,
}
