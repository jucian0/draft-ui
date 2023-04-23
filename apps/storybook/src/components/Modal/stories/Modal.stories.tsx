import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from 'ui'

const meta: Meta<typeof ModalContent> = {
  title: 'Modal',
  component: ModalContent,
}

export default meta

export const Default: StoryObj<typeof ModalContent> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <ModalOverlay isDismissable isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent {...props}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis.
            </p>
          </ModalBody>
          <ModalFooter className="flex">
            <Button
              autoFocus
              className="ml-auto"
              onPress={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button
              className="ml-2"
              variant="outline"
              onPress={() => setIsOpen(false)}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}

Default.argTypes = {
  size: {
    type: 'string',
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
  },
}

Default.args = {
  size: 'md',
}
