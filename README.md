#fis3-command-i18n [![Build Status](https://travis-ci.org/TCL-MIE-CD/fis3-command-i18n.svg?branch=master)](https://travis-ci.org/TCL-MIE-CD/fis3-command-i18n)

将Excel文件转换成java国际化标准文件：message_language.properties  
使用插件 tcl-i18n2  
具体配置可参考 <https://www.npmjs.com/package/tcl-i18n2>
 
        
使用方式：

fis-conf.js  

    fis.config.set('i18n',{
        file:'test2.xlsx',
        sheetName:null,
        output:{
            filePath:'./fis-i18n',
            fileType:'properties',
            fileName:'message_{language}',
            replace:[{
                from:'&#10;',
                to:'<br/>'
            }]
        }
    });
Command:

    fis3 i18n
    
Demo: 先全局安装fis3,再安装fis3-command-i18n,有个demo目录，cd到该目录后执行

    fis3 i18n
