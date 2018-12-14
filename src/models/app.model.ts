import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { AppInterface as IApp } from '../interfaces/app.interface';
import { appSchema } from '../schemas/app.schema';

export interface AppModel extends IApp, Document {}

export default mongoose.model<AppModel>('App', appSchema);