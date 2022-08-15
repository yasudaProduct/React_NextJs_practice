import { time } from "console";
import React, { useState, useEffect, useLayoutEffect } from "react";

//タイマーが呼び出される周期を１秒にする
const UPDATE_CYClE = 1000

//localstrageで使用するキー
const KEY_LOCAL = 'KEY_LOCAL'

enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

export const Clock = () => {

    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    //タイマーをセットするための副作用
    useEffect(() => {
        //タイマーのセット
        const timer = setInterval(() => {
            setTimestamp(new Date())

        }, UPDATE_CYClE)


        //クリーンアップ関数を渡し、アンマウント時にタイマーの解除をする
        return () => {
            clearInterval(timer)

        }
        //初期描画時のみ表示する
    }, [])

    //localstorageから値を読み込むための副作用
    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCAL)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    //localeが変化したときに、localstrageに値を保持する為の副作用
    useEffect(() => {
        localStorage.setItem(KEY_LOCAL, locale)

        //依存配列にlocaleを渡し、localeが変化する度に実行するようにする
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-lable">現在時刻</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="en-JP">en-JP</option>
                </select>
            </p>
        </div>
    )
}