from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey

Base = declarative_base()

class Respondent(Base):

    __tablename__ = 'Respondents'

    Id = Column(Integer, primary_key=True)
    Code = Column(String(), nullable=True)

class Poll(Base):

    __tablename__ = 'Polls'

    Id = Column(Integer, primary_key=True)
    Name = Column(String(), nullable=True)
    Type = Column(String(), nullable=True)

class Question(Base):

    __tablename__ = 'Questions'

    Id = Column(Integer, primary_key=True)
    Name = Column(String(), nullable=True)
    Description = Column(String(), nullable=True)
    Type = Column(String(), nullable=True)
    PollId = Column(Integer)

class Answer(Base):

    __tablename__ = 'Answers'

    Id = Column(Integer, primary_key=True)
    RespondentId = Column(Integer)
    QuestionId = Column(Integer)
    Value = Column(String(), nullable=True)
