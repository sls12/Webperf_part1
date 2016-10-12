module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.initConfig({
        uglify: {
                  my_target: {
                              files: {
                                      'release/js/perfmatters.js': ['js/perfmatters.js']
                                    }
                              }
                },

        /*cssmin: {
                  options: {
                            shorthandCompacting: false,
                            roundingPrecision: -1
                          },
                  target: {
                            files: {
                                    'release/css/output.min.css': ['css/style.css']
                                  }
                          }
                },*/


        htmlmin: {                                             // Task
                  dist: {                                      // Target
                        options: {                             // Target options
                          removeComments: true,
                          collapseWhitespace: true
                        },
                 files: {                                       // Dictionary of files
                        'release/index.html'          : 'index.html',    // 'destination': 'source'
                        'release/project-2048.html'   : 'project-2048.html',
                        'release/project-mobile.html' : 'project-mobile.html',
                        'release/project-webperf.html': 'project-webperf.html'
                        }
                      },
                },

        copy: {
                main: {
                  files:[{
                        expand: true,
                        src: 'img/*',
                        dest: 'release/'
                      },
                      {
                        expand: true,
                        src: 'views/images/*',
                        dest: 'release/'
                      }]
                    }
              }
      });

    grunt.registerTask('default',['uglify','htmlmin','copy']);
  }
