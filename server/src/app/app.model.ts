import * as mongoose from 'mongoose'

export const AppSchema = new mongoose.Schema({
    mainServerAppSettings: {
      type: String, 
      default: 'mainServerAppSettings',
      unique: true
    },
    mainAppMenu: {
      type: Array,
      
    }
  }, {timestamps: true})
  
  
  
 