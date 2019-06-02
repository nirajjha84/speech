const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const speechRecognization = window.speechRecognization || window.webkitSpeechRecognition;
const recognition = new speechRecognization();

const greetings = [
    'I am good dear',
    'Doing good chap',
    'leave me alone, please'
]

recognition.onstart = function(event) {
    //nothing
}

recognition.onresult = function() {
    const current = event.resultIndex;
    const transscript = event.results[current][0].transcript;
    content.textContent = transscript;
    readOutLoud(transscript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I do not know what you said or my master has not made me enough knowledgeable to understand your question';

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('hello')) {
        speech.text = 'Hello, how are you dear?';
    }

    if(message.includes('hi')) {
        speech.text = 'Hello, how are you dear?';
    }
        
    if(message.includes('good')) {
        speech.text = 'That is great to hear. What can I do for you today?';
    }

    if(message.includes('special')) {
        speech.text = '2nd june is Niraj and Kanchan wedding anniversary';
    }

    if(message.includes('where are you')) {
        speech.text = 'I am inside your device pal';
    }

    if(message.includes('funny')) {
        speech.text = 'Yes,it is funny';
    }

    if(message.includes('who are you')) {
        speech.text = 'I am a robot, invented by Niraj Kumar Jha';
    }

    if(message.includes('birthday')) {
        speech.text = '3rd of february is Aditya Mishar birthday, 11th july is Anika\'s birthday, 7th July is Ayush mishra birthday';
    }

    if(message.includes('stop')) {
        speech.text = 'why? are you bored of me dear?';
    }

    if(message.includes('Mishra')) {
        speech.text = 'Radheshyam mishra is from brahmpura village in bihar state. He is father of Aditya and Ankush mishra and most importantly husband of Abha Mishra.';
    }

    if(message.includes('weather')) {
        speech.text = 'Weather is too hot. I need Air Conditioning or cooler please. Do you have one';
    }

    if(message.includes('yes')) {
        speech.text = 'Yey, that is great. You are my life saver';
    }
    
    if(message.includes('song')) {
        speech.text = 'Sorry, I can not play song, I will learn that later';
    }
    
    if(message.includes('food')) {
        speech.text = 'I have no information on food at this moment';
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

