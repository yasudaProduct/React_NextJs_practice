import React, { useRef, useState } from "react";

const sleep = (ms: number) => new Promise((resolve) => {
    setTimeout(resolve, ms)
})

const UPLOAD_DELAY = 5000

const ImageUploader = () => {
    //隠されたInput要素にアクセスするためのref
    const inputImageRef = useRef<HTMLInputElement | null>(null)

    //選択されたファイルデータを保持するref
    const fileRef = useRef<File | null>(null)
    const [messeage, setMessage] = useState<string | null>('')

    //「画像をアップロード」というテキストがクリックされた時のコールバック
    const onClickText = () => {
        if (inputImageRef.current !== null) {
            //inputのDOMにアクセスして、クリックイベントを発火する
            inputImageRef.current.click()
        }
    }

    //ファイルが選択された後に呼ばれるコールバック
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files !== null && files.length > 0) {
            //fileRef.currentに値を保存する
            //fileRef.currentが変化しても再描写は発生しない
            fileRef.current = files[0]
        }
    }

    //アップロードボタンがクリックされた時に呼ばれるコールバック
    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            //通常はここでAPIを呼んで、ファイルをアップロードする
            await sleep(UPLOAD_DELAY)
            //アップロードが成功された旨を表示する為に、メッセージを書き換える
            setMessage(`${fileRef.current.name} has been successfully uploaded`)
        }

    }

    return (
        <div>
            <p style={{ textDecoration: 'undrline' }} onClick={onClickText}>
                画像をアップロード
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: 'hidden' }}
            />
            <br />
            <button onClick={onClickUpload}>アップロードする</button>
            {messeage !== null && <p>{messeage}</p>}
        </div >
    )
}

export default ImageUploader