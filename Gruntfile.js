module.exports = function(grunt){
    grunt.initConfig({
        less: {
			development: {
				options: {
					compress: false,
					cleancss: false,
					optimization: 2,
					dumpLineNumbers: 'false'
				},
				files: {
					"./assets/css/main.css": "./assets/less/main.less"
				}
			}
        },
        copy: {
            dist: {
                files: [
                    {
                        src:['index.html'],
                        dest: 'dist/'
                    },
                    {
                        src: 'node_modules/jquery/dist/jquery.min.js',
                        dest: 'dist/app/lib/jquery.min.js'
                    },
                    {
                      src:'node_modules/angular/angular.min.js',
                        dest: 'dist/app/lib/angular.min.js'
                    },
                    {
                      src:'node_modules/angular-sanitize/angular-sanitize.min.js',
                        dest: 'dist/app/lib/angular-sanitize.min.js'
                    },
                    {
                        src:'node_modules/popper.js/dist/umd/popper.min.js',
                         dest: 'dist/app/lib/popper.min.js'
                    },
                    {
                        src:'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        dest: 'dist/assets/css/bootstrap.min.css'
                    },
                    {
                        src:'node_modules/bootstrap/dist/js/bootstrap.min.js',
                        dest: 'dist/app/lib/bootstrap.min.js'
                    },
                    {
                        src:['assets/img/**','assets/language/**', 'assets/pages/**'],
                        dest:'dist/'
                    },
                    {
                        cwd: 'node_modules/font-awesome/',
                        src:'fonts/**',
                        dest:'dist/assets/',
                        expand:true
                    },
                    {
                        src:'node_modules/font-awesome/css/font-awesome.min.css',
                        dest:'dist/assets/css/font-awesome.css'
                    },
                    {
                        src:['app/php/**','app/config/**'],
                        dest:'dist/'
                    },

                    {
                        expand: true,
                        cwd: 'vendor/phpmailer/',
                        src: '**',
                        dest: 'dist/app/php/phpmailer/'
                    }


                ]
            }
        },
        cssmin: {
			       dist: {
				           files: {
					                "dist/assets/css/main.css": "assets/css/main.css"
				                    }
			          }
            },
      uglify: {
			     dist: {
				         files: [
					           {
						         expand: true,
						         src: 'app/**/*.js',
						         dest: 'dist/'
					}
				]
			}
    }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less']);
    grunt.registerTask('build', ['less','cssmin','copy','uglify']);
};
