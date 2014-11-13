'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Character Schema
 */
var CharacterSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Character name',
		trim: true
	},
    gender: {
        type: String
    },
    alignment:{

    },
    attributes: {
        str: { type: Number },
        dex: { type: Number },
        con: { type: Number },
        int: { type: Number },
        wis: { type: Number },
        cha: { type: Number }
    },
    race: {
        type: String
    },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Character', CharacterSchema);