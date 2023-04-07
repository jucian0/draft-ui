import { Label } from '../../Label/src/Label'
import { Radio } from '../../Radio/src/Radio'
import { RadioGroup, RadioGroupContent } from '../src/RadioGroup'
import { type StoryObj, type Meta } from '@storybook/react'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default: StoryObj<typeof RadioGroup> = (props) => (
  <RadioGroup orientation={props.orientation}>
    <Label>Favorite sports</Label>
    <RadioGroupContent>
      <Radio value="dogs">Dog</Radio>
      <Radio value="cats">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroupContent>
  </RadioGroup>
)

Default.argTypes = {
  orientation: {
    type: 'string',
    control: 'radio',
    options: ['vertical', 'horizontal'],
  },
}

Default.args = {
  orientation: 'vertical',
}
