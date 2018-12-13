class Voice {
    constructor() {
        this.recognition = new webkitSpeechRecognition() || new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.words = [
            'WŁĄCZ',
            'WYŁĄCZ'
        ];
        
        let self = this;

        this.results = {
            result: '',
            get value() {
                return this.result
            },
            set value(newValue) {
                if (this.result !== newValue) {
                    this.result = newValue;
                    self.apiCall(this.result);
                }
            }
        };

        this.init();
    }

    init() {
        this.recognition.start();
        this.recognition.onresult = event => this.getWord(event);
    }

    getWord(event) {
        let transcript = event.results[event.results.length - 1][0].transcript.toUpperCase().trim();

        if (this.words.indexOf(transcript) >= 0) {
            this.results.value = transcript;
        }
    }

    apiCall(word) {
        axios.post('http://192.168.88.42:8080/light', {
            message: word,
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}