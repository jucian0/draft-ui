import { Button } from '../../Button/src/Button'
import { Checkbox } from '../../Checkbox/src/Checkbox'
import { GridList, GridListItem } from '../src/GridList'
import { type StoryObj, type Meta } from '@storybook/react'

const meta: Meta<typeof GridList> = {
  title: 'GridList',
  component: GridList,
}

export default meta

export const Default: StoryObj<typeof GridList> = (props) => (
  <GridList aria-label="Favorite pokemon" selectionMode="multiple">
    <GridListItem textValue="Charizard">
      <Checkbox />
      Charizard
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
    <GridListItem textValue="Blastoise">
      <Checkbox />
      Blastoise
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
    <GridListItem textValue="Venusaur">
      <Checkbox />
      Venusaur
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
    <GridListItem textValue="Pikachu">
      <Checkbox />
      Pikachu
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
  </GridList>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
