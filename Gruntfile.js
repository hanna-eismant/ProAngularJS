module.exports = function (grunt) {

    // Волшебная строчка. Она творит магию.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        wiredep: {
            target: {
                src: 'client/*.html'
            }
        },

        // Эта таска отслеживает изменения в файлах проекта и запускает другие таски при необходимости.
        watch:  {
            // Волшебство. При изменении файлов открытая страничка в браузере перезагрузится автоматически.
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'client/**'
                ]
            }
        },

        // Эта таска запускает сервер.
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },

            livereload: {
                open: true,
                middleware: function (connect) {
                    return [
                        connect.static('client')
                    ];
                }
            }
        }

    });

    // Регестрируем таску, которую можно вызвать с консоли. По сути, под одним названием мы запускаем другие в указанном порядке.
    grunt.registerTask('server', [
        'wiredep',
        'connect',
        'watch'
    ]);

};
