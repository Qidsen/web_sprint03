let flag = true;

let houseMixin = {
    wordReplace(remove, add){this.description = this.description.replace(remove, add)},
    wordInsertAfter(last, add){this.description = this.description.replace(last, last + " " + add)},
    wordDelete(word){this.description = this.description.replace(word, "")},
    wordEncrypt() {this.description = this.description.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt() + 13 - 26 * /[n-z]/i.test(c)))},
    wordDecrypt() {this.description = this.description.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt() - 13 + 26 * /[a-m]/i.test(c)))},
}
