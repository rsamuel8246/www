module.exports = function( grunt ) {

  grunt.initConfig({

    // Tasks que o Grunt deve executar
    uglify : {
    	options : {
    		mangle : false
    	},

    	minificar : {
    		files : {
    			'js/main.js' : ['js/modernizr.custom.79639', 'js/modernizr.custom' ]
    		}
    	}
    },//uglify


    concat :{
    	
    		src :['js/*.js'],
    		dest :'js/all.js'
    	
    }
});


    //Pulgins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    //Tarefas que  serão executadas
    grunt.registerTask("default",['uglify', 'concat']);


};