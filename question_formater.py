import csv

# Function to convert CSV data
def convert_csv(input_filename, output_filename):
    with open(input_filename, 'r', newline='', encoding='utf-8') as infile, open(output_filename, 'w', newline='', encoding='utf-8') as outfile:
        reader = csv.reader(infile, delimiter=';')
        writer = csv.writer(outfile, delimiter='@', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        
        for row in reader:
            question, *options, correct_option_number, question_number = row

            # Skip rows where the correct answer is option 5
            if correct_option_number == '5':
                continue
            
            # Check if correct_option_number is a valid number (int) and skip row if not
            if not correct_option_number.isdigit():
                continue
            
            # Omit option 5 from the output if it's not the correct answer
            if len(options) == 5:
                options = options[:4]

            # Check if the correct option number is within the available options
            correct_option_number = int(correct_option_number) - 1  # Convert to 0-based index
            if correct_option_number < 0 or correct_option_number >= len(options):
                continue

            # Create the desired output format
            correct_answer = options[correct_option_number]
            formatted_row = [question] + options[:4] + [correct_answer]
            
            # Write the formatted row to the output file
            writer.writerow(formatted_row)

# Usage example
input_filename = 'questions_orig.csv'  # Replace with your input file name
output_filename = 'pisquestions2.csv'  # Replace with your desired output file name

convert_csv(input_filename, output_filename)
