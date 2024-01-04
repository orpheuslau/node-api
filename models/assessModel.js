const mongoose = require('mongoose')

const assessSchema = mongoose.Schema(
    {
         studentid:{
            type: String,
            required: true,
        },
                studentclassid:{
                    type: String,
                    required: false,
                },
        studentname:{
            type: String,
            required: false,
        },
                studentclassno:{
                    type: Number,
                    required: false,
                },
                assessmentdate:{
                    type: String,
                    required: false,
                },
                page1Total:{
                    type: Number,
                    required: false,
                },
                page2Total:{
                    type: Number,
                    required: false,
                },
        page3Total:{
            type: Number,
            required: false,
        },
        pageALLTotal:{
            type: Number,
            required: false,
        },
        p1score1 :{
            type: Number,
            required: false,
        },
        p1score2:{
            type: Number,
            required: false,
        },
        p1score3:{
            type: Number,
            required: false,
        },
        p1score4:{
            type: Number,
            required: false,
        },
        
        p1score5:{
            type: Number,
            required: false,
        },
        
        p2score1:{
            type: Number,
            required: false,
        },
        p2score2:{
            type: Number,
            required: false,
        },
        
        p2score3:{
            type: Number,
            required: false,
        },
        
        p2satis:{
            type: String,
            required: false,
        },
        
        p3score1:{
            type: Number,
            required: false,
        },
        
        p3score2:{
            type: Number,
            required: false,
        },
        
        p3score3:{
            type: Number,
            required: false,
        },
        p3satis:{
            type: String,
            required: false,
        },
                
        vfeature: {type: Array, "default" : []},
  
            
        
        
        testimonia:{type: String,
            required: false,}       
    },
    {
        timestamps: true
    }
)

const Assess = mongoose.model('Assess', assessSchema);

module.exports = Assess;