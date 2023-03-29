import { Button, type _ButtonProps } from '../../Button/src/Button'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { Item, Section } from 'react-aria-components/src/Collection'
import {
  Menu,
  MenuTrigger,
  type MenuItemRenderProps,
  type MenuProps,
} from 'react-aria-components/src/Menu'
import { Popover } from 'react-aria-components/src/Popover'
import { Separator } from 'react-aria-components/src/Separator'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Menu = (props) => {
  return <MenuTrigger {...props} />
}

const _MenuButton = (props: _ButtonProps) => {
  return <Button {...props} />
}

const _MenuList = (props) => {
  return (
    <Popover>
      <Menu {...props} />
    </Popover>
  )
}

const _MenuItem = (props) => {
  return <Item {...props} />
}

const _MenuSection = (props) => {
  return <Section {...props} />
}

const _MenuSeparator = (props) => {
  return <Separator {...props} />
}

export {
  _Menu as Menu,
  _MenuButton as MenuButton,
  _MenuList as MenuList,
  _MenuSection as MenuSection,
  _MenuItem as MenuItem,
  _MenuSeparator as MenuSeparator,
}
