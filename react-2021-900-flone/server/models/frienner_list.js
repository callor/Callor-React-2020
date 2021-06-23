const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'frienner_list',
        {
            id : {
                type : DataTypes.String(10),
                allowNull:false
            },
            nn: {
                type: DataTypes.String(10),
                allowNull:false
            },
            pw:{
                type: DataTypes.String(15),
                allowNull:false
            }, 
            name:{
                type: DataTypes.String(10),
                allowNull:false
            }, 
            addr:{
                type: DataTypes.String(30),
                allowNull:false
            }, 
            tel:{
                type: DataTypes.String(20),
                allowNull:false
            }, 
            email:{
                type: DataTypes.String(20),
                allowNull:false
            }, 
            liv:{
                type: DataTypes.String(10),
                allowNull:false
            }, 
            sup:{
                type: DataTypes.String(2),
                allowNull:false
            }
        },

            {
                charset : 'utf8',
                collate : 'utf8_general_ci',
                timestamps: false,

            }
    )
        };
 