Vidhi: Virtual Legal Assistant
Vidhi is an AI-powered virtual legal assistant designed to provide users with accurate and context-aware legal assistance. This innovative tool leverages state-of-the-art machine learning models to deliver responses tailored to legal queries, enhancing accessibility and efficiency in the legal domain.

Features
Legal Query Handling: Provides detailed and precise answers to user questions related to various legal domains.
Interactive Chat Interface: User-friendly chat interface for seamless interaction.
Lawyer Recommendations: Suggests relevant legal professionals based on user queries.
Exportable Conversations: Users can copy and download chat transcripts for their records.
PDF Interaction: Upload legal documents and extract relevant insights or interact with the content.
Model Used
Vidhi is powered by the Llama 2 series model, specifically the llama-2-7b-chat.Q8_0 (1).gguf, sourced from Hugging Face. This robust language model is fine-tuned to generate contextually accurate and human-like legal responses, making it an ideal choice for this project.

Tech Stack
Frontend: React.js for building an interactive user interface.
Backend: Node.js and Express.js for API development and server-side operations.
Database: MongoDB for managing user data and session logs.
AI Framework: Hugging Face Transformers for model integration.
Setup Instructions
Prerequisites
Node.js and npm installed.
MongoDB database setup.
Access to the llama-2-7b-chat.Q8_0 (1).gguf model.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/abhishekvardan/Virtual_Legal_Assistant.git
cd Virtual_Legal_Assistant
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following:
makefile
Copy code
MONGO_URI=<your_mongodb_connection_string>
MODEL_PATH=<path_to_gguf_model>
Run the application:

bash
Copy code
npm start
Access the app: Open your browser and navigate to http://localhost:3000.

Future Enhancements
Integration of multilingual support.
Addition of advanced legal document analysis.
Support for voice-based interactions.
Enhanced recommendation algorithms for lawyer suggestions.
Contributing
Contributions are welcome! Feel free to submit a pull request or raise an issue for discussion.


