import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled, { css } from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string
    children: React.ReactNode
}

//Next.jsのリンクにスタイルを適応するための
const BaseLink = (props: BaseLinkProps) => {
    const { className, children, ...rest } = props
    return (
        <Link{...rest}>
            <a className={className}>{children}</a>
        </Link>
    )
}

const StyledLink = styled(BaseLink)`
    color: #1e90ff;
    font-size: 2em;
`

//青いボールド文字を表示するコンポーネント
const Text1 = styled.p`
    color: bule;
    font-weight: bold;
`
//Text1を継承し、ボーダーのスタイルを加えたコンポーネント
const BorderedText = styled(Text1)`
    padding: 8px 16px;
    border: 3px solid blue;
    border-redius: 8px;
`

//赤色のボーダーを表示するスタイル
const redBox = css`
    padding: 0.25em 1em;
    border: 3px solid #ff0000;
    border-radius: 10px;
    `

//青色文字を表示するスタイル
const font = css`
    color: #1e90ff;
    font-size: 2em;
`

//赤色ボーダーと青色文字のスタイルをそれぞれ適応し、背景が透明なボタンコンポーネント
const Button1 = styled.button`
    background: transparent;
    margin: 1em;
    cursor: pointer;

    ${redBox}
    ${font}
`

//青色文字のスタイルを継承し、ボールドでテキストを表示するコンポーネント
const Text = styled.p`
    font-weight: bold;

    ${font}
`
type ButtonProps = {
    color: string
    backgroundColor: string
}

//文字色と背景色がpropsから変更可能なボタンコンポーネント
//型引数propsの型を渡す
const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    border: 2px solid ${(props) => props.color};

    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
    cursor: pointer;
`

//span要素にスタイルを適応
const Badge = styled.span`
    padding: 8px 16px;
    font-weight: center;
    text-align: center;
    color: white;
    background: red;
    border-radius: 16px;
`

const Page: NextPage = () => {
    return (
        // <Badge>Hello World!</Badge>
        <div>
            <Button backgroundColor="transparent" color="#FF0000">
                Hello
            </Button>
            <Button backgroundColor="#1E90FF" color="white">
                World
            </Button>
            <br />
            <Button1>Hello</Button1>
            <Text>World</Text>
            <br />
            <Text1>Hello</Text1>
            <BorderedText>World</BorderedText>
            <Text as="a" href="/" >Go to Index</Text>
            <br />
            <StyledLink href="/">Go to Index</StyledLink>
        </div>
    )
}

export default Page