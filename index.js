var tclI18n2 = require('tcl-i18n2');
exports.name = 'i18n';
exports.desc = '';
exports.options = {
    '-h, --help': 'print this help message',
    '--files'   : 'some options.'
};

exports.run = function(argv, cli, env) {
    // 如果输入为 fis3 foo -h
    // 或者 fis3 foo --help
    // 则输出帮助信息。
    if (argv.h || argv.help) {
        return cli.help(exports.name, exports.options);
    }

    // 可以通过 argv 知道命令行中有哪些参数以及是什么值。
    console.log('i18n-xlsx parse start');
    var i18nConfig = fis.config.get('i18n');
    tclI18n2.parse(i18nConfig);
    console.log('i18n-xlsx parse success');
};