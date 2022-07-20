const {readFileSync} = require('fs')
const { resolve } = require('path')
const INNER = '<!-- inner -->'
class MdWebpackPlugin{
    constructor({template,filename}){
        if(!template) {
            throw new Error('the template is must required')
        }
        this.template = template
        this.filename = filename
    }
    apply(compiler) {
        compiler.hooks.emit.tap('md-to-html-plugin',(compilation) => {
            const _assets = compilation.assets;
            console.log(_assets);
            const _mdContext = readFileSync(this.template,'utf-8');
            const _htmlContext = readFileSync(resolve(__dirname,'template.html'),'utf-8')
            const _htmlStr = compileHtml(_mdContext.split('\n'))
            _assets[this.filename] = {
                source(){
                    return _htmlContext.replace(INNER,_htmlStr)
                },
                size() {
                    return _htmlContext.length
                }
            }
        })
    }
}

module.exports = {
    MdWebpackPlugin
}






