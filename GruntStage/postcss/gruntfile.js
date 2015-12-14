module.exports = function(grunt) {
    grunt.initConfig({             
        postcss: {
            options: {
                processors:[
                    require('postcss-import')(),//加载样式表
                    require('precss')(),//预处理器功能插件
                    require('postcss-color-rgba-fallback')(),//为IE8添加备用色
                    require('postcss-opacity')(),//为IE8添加滤镜属性作为降级处理
                    require('pixrem')(),//自动为rem添加px单位作为降级处理
                    require('css-mqpacker')(),//媒体查询重复样式合并
                    require('autoprefixer')(),
                    require('cssnano')()//压缩
                ]
            },
            dist: {
                src: 'src/style.css',
                dest: 'dest/style.css'
            }
        }
    });  
    grunt.loadNpmTasks('grunt-postcss');
    
};