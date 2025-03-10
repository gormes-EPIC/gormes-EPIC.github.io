#Quizlet Repo

import random
import csv



class Question:
    def __init__(self, question, answers, correct, number):
        self.question = question
        self.answers = answers
        self.correct = correct
        self.number = number
    
    def __init__(self, question_list):
        temp_q = str(question_list[0])
        q = ""
        slash = False
        for c in temp_q:
            if slash == True:
                slash = False
            elif c == "\\":
                q = q + "\n"
                slash = True
            else:
                q = q + c
            
        self.question = q
        self.answers = question_list[1:6]
        ans = question_list[6].split("|")
        possible = []
        for a in ans:
            if "&&" in a:
                possible.append(tuple(a.split("&&")))
            else:
                possible.append(a)
        self.correct = possible
        self.number = question_list[7]


class Quiz:
    def __init__(self, questions):
        self.questions = questions

    def give_quiz(self):
        score = 0
        print()
        for q in self.questions:
            print_question(q)
            validate = True
            answer = ""

            while validate:
                answer = input("Select an answer: ")
                validate = anti_validate_ans(answer)
            
            answer.strip()

            if "," in answer:
                answers = answer.split(",")
                
                percent = check_multi_ans(answers, q)
                if percent == 0:
                    print_answer(q)
                elif percent == 1:
                    score = score + 1
                    print("\nNice Work!\n")
                else:
                    print("\nPartially Correct")
                    print_answer(q)
            else:
                try:
                    answer = int(answer) - 1
                    if str(answer) in q.correct:
                        score = score + 1
                        print("\nNice Work!\n")
                    else:
                        print_answer(q)
                except ValueError:
                    print_answer(q)

        print("\n\nQuiz Score: " + str(score))


# Return True if their answer is bad
def anti_validate_ans(answer):
    try:
        if "," in answer:
            answers = answer.split(",")
            for guess in answers:
                guess = int(guess) - 1
                if guess not in [0,1,2,3,4]:
                    return True
            return False
        else: 
            guess = int(answer) - 1
            if guess in [0,1,2,3,4]:
                return False
            return True
    except ValueError:
        return True

# Checks if multiple answers are correct
def check_multi_ans(answers, q):
    score = 0
    try:
        for op in q.correct:
            for guess in answers:
                guess = int(guess) - 1
                if str(guess) in op:
                    score = score + 1
            return score/len(op)
    except ValueError:
        return 0
    
# Prints out a question and all avaliable answers
def print_question(q):
    print("---------------------")
    print(str(q.number) + ". " + q.question + "\n")
    for i in range(4):
        if q.answers[i].strip() != "":
            print(str(i+1) + ": " + q.answers[i])
    print()

# Prints the answers
def print_answer(q):
    for x in q.correct:
        try: 
            x = int(x)
            print("\nCorrect Answer: " + str(q.answers[x]))
        except:
            s = ""
            for i in x:
                s += i + " and "
            print("\nCorrect Answer: " + str(s.strip(" and ")))
    print("\n")

# Read in questions from csv document
def read_questions():
    all_questions = []
    with open('questions.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=';', quotechar='@')
        for row in spamreader:
            all_questions.append(Question(row))
    return all_questions

# Generate a quiz from a list of all possible questions
def generate_quiz(all_questions):
    questions = []
    try:
        quiz_len = input("How many questions? ")
        prev = [-1]
        num = -1
        for i in range(int(quiz_len)):
            while num in prev:
                num = random.randint(0,len(all_questions)-1)
            questions.append(all_questions[num])
            prev.append(num)
        return questions
    except ValueError:
        return generate_quiz(all_questions)
    
# Generate a quiz from a specific list of questions
def generate_specific_quiz(questions):
    return questions
   
# Prints a question and its answer
def get_question(all_questions, num):
    q = all_questions[num]
    print_question(q)
    print_answer(q)


# Generates a quiz except when interrupted then gets a question
def main():
    all_questions = read_questions()
    try:
        print("Welcome to the PCEP Practice Quiz Generator!")
        print("\nTo enter an answer, type the number of the answer you would like to select.")
        print("To choose two answers, put a comma between both answers.\n")

        questions = generate_quiz(all_questions)
        new_quiz = Quiz(questions)
        new_quiz.give_quiz()
    except EOFError:
        num = input("Get Question(s): ")
        if "," in num:
            start, stop = num.split(",")
            start = int(start)
            stop = int(stop)

            questions = generate_specific_quiz(all_questions[start: stop])
            new_quiz = Quiz(questions)
            new_quiz.give_quiz()

        elif num == "l":
            get_question(all_questions, len(all_questions)-1)
        else:
            get_question(all_questions, int(num) - 1)


main()