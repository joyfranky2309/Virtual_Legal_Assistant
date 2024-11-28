# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from langchain.prompts import PromptTemplate
# from ctransformers import AutoModelForCausalLM

# app = Flask(__name__)
# CORS(app)

# ## Function to get response from LLama 2 model
# def getLLamaresponse(input_text, no_words):
#     try:
#         llm = AutoModelForCausalLM.from_pretrained('Model/llama-2-7b-chat.Q8_0 (1).gguf',
#                                                     model_type='llama',
#                                                     max_new_tokens=256,
#                                                     temperature=0.1)

#         # Define the structured template specific to Indian Constitution
#         template = """
#             You are an Indian legal assistant. Provide a detailed and accurate answer to the following legal question according to the Indian Constitution:\n\n${input_text}\n\nPlease respond in the following format:\n
#             **Introduction:**\n[Content]\n\n
#             **Main Points:**\n1. [Content]\n2. [Content]\n\n
#             **Conclusion:**\n[Content]
#         """

#         # Create a PromptTemplate instance with the structured format
#         prompt = PromptTemplate(input_variables=["input_text"],
#                                 template=template)

#         # Format the prompt with user input
#         formatted_prompt = prompt.format(input_text=input_text)

#         print("Formatted Prompt:", formatted_prompt)  # Debugging: Print formatted prompt
        
#         # Get the response from the model
#         response = llm(formatted_prompt)
        
#         print("Raw Response:", response)  # Debugging: Print raw response
        
#         return response
#     except Exception as e:
#         print("Error in getLLamaresponse:", str(e))  # Debugging: Print error message
#         return "Error in generating response"

# def format_response(text):
#     # Basic formatting: replace [Content] placeholders with actual content
#     formatted_text = text.replace('[Content]', '\n').strip()
#     return formatted_text

# @app.route('/api/llama2', methods=['POST'])
# def llama2():
#     data = request.json
#     input_text = data.get('prompt', '')
    
#     if not input_text:
#         return jsonify({'response': 'Please provide a prompt'})
#     elif len(input_text) > 1000:
#         return jsonify({'response': 'Prompt is too long. Please provide a shorter prompt'})
#     elif input_text.lower() in ["hi", "hello"]:
#         return jsonify({'response': 'Hello! I am your virtual legal assistant. How can I help you today?'})
#     else:
#         response = getLLamaresponse(input_text, 100)
#         formatted_response = format_response(response)
#         return jsonify({'response': formatted_response})

# if __name__ == '__main__':
#     app.run(port=5001)
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.prompts import PromptTemplate
from ctransformers import AutoModelForCausalLM

app = Flask(__name__)
CORS(app)

## Function to get response from LLama 2 model
def getLLamaresponse(input_text):
    try:
        llm = AutoModelForCausalLM.from_pretrained('Model/llama-2-7b-chat.Q8_0 (1).gguf',
                                                    model_type='llama',
                                                    temperature=0.7)

        # Define the structured template specific to Indian Constitution
        # template = """
        #     You are an Indian legal assistant. Provide a detailed and accurate answer to the following legal question according to the Indian Constitution:\n\n ${input_text}
        # """
        template="""You are a legal assistant. Provide a detailed and accurate answer to the following legal question accorfing to indian constitution only: {input_text} in simple words and within 150 words"""

        prompt = PromptTemplate(input_variables=["input_text"],
                                template=template)

        formatted_prompt = prompt.format(input_text=input_text)  
        response = llm(formatted_prompt,max_new_tokens=256)
        
        return response
    except Exception as e:
        print("Error in getLLamaresponse:", str(e)) 
        return "Error in generating response"

def format_response(text):
    formatted_text = text.replace('[Content]', '\n').strip()
    return formatted_text

@app.route('/api/llama2', methods=['POST'])
def llama2():
    data = request.json
    input_text = data.get('prompt', '')
    
    if not input_text:
        return jsonify({'response': 'Please provide a prompt'})
    elif len(input_text) > 1000:
        return jsonify({'response': 'Prompt is too long. Please provide a shorter prompt'})
    elif input_text.lower() in ["hi", "hello"]:
        return jsonify({'response': 'Hello! I am your virtual legal assistant. How can I help you today?'})
    else:
        response = getLLamaresponse(input_text)
        formatted_response = format_response(response)
        return jsonify({'response': formatted_response})

if __name__ == '__main__':
    app.run(port=5001)
