import google.generativeai as genai
import os
from dotenv import load_dotenv

def main():
    # Load environment variables from .env file
    load_dotenv()
    
    # Get API key from environment variable
    GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
    
    if not GOOGLE_API_KEY:
        print("Error: GOOGLE_API_KEY not found in environment variables.")
        print("Please create a .env file with: GOOGLE_API_KEY=your_api_key_here")
        return
    
    # Configure the API
    genai.configure(api_key=GOOGLE_API_KEY)
    
    # Initialize the model
    model = genai.GenerativeModel('gemini-pro')
    chat = model.start_chat(history=[])
    
    print("\n🤖 Gemini Chat - Type 'quit' to exit\n")
    print("Welcome! How can I assist you today?\n")
    
    while True:
        try:
            # Get user input
            user_input = input("You: ")
            
            # Check for exit command
            if user_input.lower() in ['quit', 'exit', 'bye']:
                print("\nGoodbye! 👋")
                break
                
            # Get and display response
            response = chat.send_message(user_input)
            print("\n🤖 Gemini:", response.text, "\n")
            
        except Exception as e:
            print(f"\n⚠️ An error occurred: {str(e)}\n")

if __name__ == "__main__":
    main()
