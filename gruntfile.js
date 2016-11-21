module.exports = function(grunt){

  grunt.initConfig({

    clean:['build/'],

    jshint:{
      options:{
        jshintrc: '.jshintrc',
        ignores:['node_modules/**']
      },

      source:{
        files:{
          src:['src/js/**/*.js']
        }
      }
    },

    sass:{
      allStyles:{
        files:{
          'build/css/styles.css': 'src/sass/main.scss'
        }
      }
    },

    copy:{
      html:{
        files:[
        {
          expand: true,
          cwd: 'src',
          src:['index.html'],
          dest: 'build/'
        }
        ]
      }
    },

    vendorjs:{
      files:[
        {
          expand:true,
          cwd:'node_modules/jquery/dist/',
          src:['jquery.js'],
          dest:'build/js'
        }
      ]
    },

    concat:{
      js:{
        src:['src/js/**/*.js'],
        dest: 'build/js/app.js'
      }
    },

    connect:{
      testing:{
        options:{
          port:8080,
          base:'.'
        }
      }
    },

    mocha:{
      all:{
        options:{
          urls:[
            'http://localhost:8080/test/calc.html'
          ]
        }
      }
    }



  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');



  grunt.registerTask('test', ['clean', 'connect','mocha','jshint']);

  grunt.registerTask('default', ['clean','jshint','sass','copy', 'concat']);


};
