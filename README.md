将Excel文件转换成java国际化标准文件：message_language.properties  
使用插件 tcl-i18n2  
具体配置可参考 <https://www.npmjs.com/package/tcl-i18n2>
 
        
使用方式：

fis.conf.js  

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
