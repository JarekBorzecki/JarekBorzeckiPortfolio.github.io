module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({
		sass: {
      		options: {
        		sourceMap: true
      		},
      		dist: {
        		files: {
          		'css/style.css': 'sass/style.sass'
        		}
      		}
    },
    
  //   imagemin: {
  //   		dynamic: {
  //       		files: [{
	 //            expand: true,
	 //            cwd: 'img/',
	 //            src: ['**/*.{png,jpg,gif}'],
	 //            dest: 'img/build/'
  //       		}]
  //   		}
		// },

		watch: {
		    scripts: {
		        files: ['sass/*.sass'],
		        tasks: ['sass'],
		        options: {
		            spawn: false,
		        },
		    } 
		},

		browserSync: {
				default_options: {
				    bsFiles: {
				        src : [
				        	'css/*.css',
				        	'*.html'
				        ]
				    },
				    options: {
				    		watchTask: true,
				    		server: {
				    			baseDir: './'
				    		}
				    }
				}
		}		
});

	// Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Default task(s).
	grunt.registerTask('default', ["sass", "browserSync", "watch"]);
};
