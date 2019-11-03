const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const reference = document.querySelector('.reference');


const speechRecognization = window.speechRecognization || window.webkitSpeechRecognition;
const recognition = new speechRecognization();

const getTime = () => {  const time = new Date(Date.now());  return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`};
const getDate = () => {  const time = new Date(Date.now());  return `today is ${time.toLocaleDateString()}`;};

const greetings = [
    'I am good',
    'Doing good'
]

recognition.onstart = function(event) {
    // nothing
}

recognition.onresult = function() {
    const current = event.resultIndex;
    const transscript = event.results[current][0].transcript;
    content.textContent = transscript;
    readOutLoud(transscript);
    document.getElementById('mic').classList.remove('active-mic');
}

btn.addEventListener('click', () => {
    document.getElementById('mic').classList.add('active-mic');
    reference.textContent = '';
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Sorry, I am still in training and collecting information. I do not have this answer now';

    if(message.includes('hello')) {
        speech.text = 'Hello, my name is Toco. How can I help you today.';
    }
    if(message.includes('hi')) {
        speech.text = 'Hi, my name is Toco. How can I help you today.';
    }

    if(message.includes('music')) {
        speech.text = 'I am sorry, I am at work, I would prefer not to facilitate your queries on music.';
    }
    if(message.includes('joke')) {
        speech.text = 'I am sorry, I am at work, I would prefer not to facilitate your queries on jokes.';
    }
    if(message.includes('video')) {
        speech.text = 'I am sorry, I am at work, I would prefer not to facilitate your queries on videos.';
    }

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('unlock')) {
        speech.text = 'To unlock your account,you have 2 options.'+
        'One option is to use PRAS. In case you are registered to PRAS then Dial *97 from your phone to use PRAS'+
        'Other option is to contact your local ISC to unlock your account';
    }

    if(message.includes('Password reset')) {
        speech.text = 'You can reset your password using PRAS. Other options is to contact your local ISC';
    }

    if(message.includes('customer care')) {
        speech.text = 'Nationwide custmare care number at UK location is *97'+
        'From India, You can dial on ...'+
        'I am giving these numbers on your device now';
        reference.textContent = 'UK - *97, India: +44 ...';
    }

    if(message.includes('release manager')) {
        speech.text = 'In channel squad, Lucy Wiltshire, Nathan miller are release managers.';
    }

    if(message.includes('demand manager')) {
        speech.text = 'Tanya Goldman is demand manager in channel squad';
    }

    if(message.includes('build manager')) {
        speech.text = 'In channel squad, Manish puri is build managers.';
    }

    if(message.includes('IBM lead')) {
        speech.text = 'Neil evans is IBM lead in channel squad';
    }

    if(message.includes('build')) {
        speech.text = 'Kamal Thakur is build workstream lead and the main contact person';
    }

    if(message.includes('Test')) {
        speech.text = 'Pranil is test workstream lead and the main contact person';
    }

    if(message.includes('Design')) {
        speech.text = 'Daniella Mcgrory is design workstream lead';
    }

    if(message.includes('solution lead')) {
        speech.text = 'Beng Tong is solution engineering workstream lead';
    }

    if(message.includes('agile')) {
        speech.text = 'hufflepuff and gryffindor are 2 active sprints teams in channel squad';
    }

    if(message.includes('furlough')) {
        speech.text = 'Yes, there are some news on furlough. Not all resources are included in furlo. You will be notified if are included.';
    }

    if(message.includes('TFS Access')) {
        speech.text = 'For TFS access, you should have TFS collection or project group name. Once you get the group name then raise request online on Identitiy IQ tool';
    }

    if(message.includes('innovation')) {
        speech.text = 'Innovation is one of the mandatory area for you. there are three innovation teams in channel squad. Be part of one of the team to contribute.';
    }

    if(message.includes('build team members')) {
        speech.text = 'There are around 41 build members, for more information contact Rama';
    }

    if(message.includes('test team members')) {
        speech.text = 'Pranil is contact person for test work stream';
    }

    if(message.includes('time')) {    
        speech.text = getTime();
    }

    if(message.includes('date')) {
        speech.text = getDate();
    }

    if(message.includes('day')) {
        speech.text = getDate();
    }

    if(message.includes('who are you')) {
        speech.text = 'I am Toco. I am a robot. I am invented by Niraj Jha';
    }

    if(message.includes('How are you')) {
        speech.text = 'Fantastic';
    }
    if(message.includes('what\'s up')) {
        speech.text = 'Amazing, having fun in world wide web and inside hardwares';
    }
    if(message.includes('whatsapp')) {
        speech.text = 'There are multiple whatsapp group. you can join build, onsite, test or other groups as intrested';
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
