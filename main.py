from flask import Flask, render_template, request, flash, redirect, url_for, session
import google.generativeai as genai
import os
import aiResponse
import random

green = Flask(__name__)

genai.configure(api_key='AIzaSyDrt7U2XYF2otJFyg2s5lGlSH0uut0QIqc')

green.config["SECRET_KEY"] = "LOL420"

@green.route('/')
def home():
    return render_template('index.html')

@green.route('/kisaan')
def kisaan():
    return render_template('kisan.html')

@green.route('/chatui', methods = ['GET','POST'])
def chatui():
    data = session.get('data', [])

    if request.method == "POST":
        input_text = request.form.get("text")
        if input_text:
            # Using generative AI model to generate content
            model = genai.GenerativeModel(model_name="gemini-pro")
            condition = model.generate_content(f"{input_text}  is related to agriculture, only answer in one word yes or no")
            user_greet = model.generate_content(f"{input_text} is related to greeting, only answer in one word yes or no")
            user_greet = user_greet.text
            condition = condition.text
            if user_greet.lower() == "yes":
                a = random.randint(0,5)
                response = aiResponse.greetingL[a]
                text_result = response
            elif condition.lower() == 'yes':
                response = model.generate_content(input_text)
                text_result = response.text
                print(condition,text_result)
            
                
            else:
                text_result = "I am not able to help you with this. Sorry"
            
            data.append({'input': input_text, 'result': text_result})
            session['data'] = data

            return redirect('chatui')
        
        else:
            flash("Please provide a valid input!", "error")

    return render_template("chat.html", data=data[::-1])

if __name__ == '__main__':
    green.run(debug=True, host='0.0.0.0', port=8000)