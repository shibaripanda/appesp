export const tableDataView = (data: {[key: string]: any}) => {
    let text = ''
    for(const i in data){
        text = text + '\n' + i + ': ' + data[i]
    }
    return text
}