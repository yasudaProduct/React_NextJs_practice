import Button from './Button'

//metadataを設定
export default {
    title: 'Common/Button',
    components: Button,
}

export const HelloButton = () => <Button>Hello World!</Button>
export const ClickButton = () => <Button>Click!</Button>