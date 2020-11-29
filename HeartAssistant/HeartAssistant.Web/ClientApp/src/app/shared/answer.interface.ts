import { Question } from './question.interface';
import { Respondent } from './respondent.interface';

export interface Answer {
    id: number;
    question: Question;
    respondent: Respondent
    value: string;
  }