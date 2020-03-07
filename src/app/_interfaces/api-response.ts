import { NachhilfeSchueler } from '../nachhilfe/_interfaces/nachhilfe-schueler';
import { UserInterface } from './user-interface';

export interface ApiResponse {
  res: boolean;
  error?: string;
  description?: string;
  token?: string;
  return?: NachhilfeSchueler | UserInterface;
}
