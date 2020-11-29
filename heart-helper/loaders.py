import csv
from sqlalchemy.orm import Session

from models import Respondent, Question, Answer

class CsvLoader():

    def __init__(self, session: Session):
        self.session = session
    
    def load(self, file_path: str):
        poll_id = 1
        with open(file_path, newline='', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile, delimiter=';', quotechar='"')

            questions = dict()

            fields = reader.fieldnames[1:]
            for field in fields:
                question = self.session.query(Question).filter(Question.Name == field, Question.PollId == poll_id).first()
                if not question:
                    question = Question(Name=field, PollId=poll_id)
                    self.session.add(question)
                    self.session.commit()
                questions[question.Name] = question.Id

            if len(questions) != len(fields):
                print('Not all questions found!')
                return

            for row in reader:
                code = row['ID']
                respondent = self.session.query(Respondent).filter(Respondent.Code == code).first()
                if not respondent:
                    respondent = Respondent(Code=code)
                    self.session.add(respondent)
                    self.session.commit()
                
                answers = []
                for question, question_id in questions.items():
                    answer = self.session.query(Answer)\
                        .filter(
                            Answer.QuestionId == question_id,
                            Answer.RespondentId == respondent.Id)\
                        .first()
                    if not answer:
                        answer = Answer(RespondentId=respondent.Id, QuestionId=question_id, Value=row[question])
                        answers.append(answer)
                
                if answers:
                    self.session.bulk_save_objects(answers)
                    self.session.commit()
