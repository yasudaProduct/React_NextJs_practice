//無名関数でコンポーネントを定義し、Textという変数に代入する
//Textコンポーネントは親から'context'というデータを受け取る
const Text = (props: { content: string }) => {
    const { content } = props

    return <p className="text">{content}</p>

}

const Message = (props: {}) => {
    const content1 = 'This is parent component'
    const content2 = 'Message uses Text component'

    return (

        < div >
            {/* contentというキーでコンポーネントにデータを渡す */}
            <Text content={content1} />
            <Text content={content2} />
        </div >
    )
}

export default Message
