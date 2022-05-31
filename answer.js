// 字符串最后一个单词的长度
const words = readline()
const fn = (str) => {
    let arr = str.split(' ')
    return arr[arr.length - 1]
}
console.log(fn(words));
