import Taro from "@tarojs/taro"

interface CommonOption {
    name: string
    data?: object
}
interface LoadingOption {
    show?: true
    text?: string
}

const CCFC = (option: CommonOption, loading: LoadingOption = { show: true, text: 'loading...' }):
    Promise<Taro.cloud.CallFunctionResult> => {
    if (loading.show === undefined) loading.show = true
    if (loading.text === undefined) loading.text = 'loading...'

    return new Promise((resolve, reject) => {
        loading.show && Taro.showLoading({ title: <string>loading.text, mask: true })
        Taro.cloud.callFunction({
            name: option.name,
            data: option.data
        }).then(res => { resolve(res) })
            .catch(err => { reject(err) })
            // .finally(() => { loading.show && Taro.hideLoading() })
            .then(() => { loading.show && Taro.hideLoading() })
    })
}

export default CCFC
