const mailAdmin = 'xxxxx'

export default class Comparador {
    constructor(enviarMail) {
        this.enviarMail = enviarMail
    }

    compare(num1, num2) {
        if (num1 < num2) {
            return -1
        } else if (num1 > num2) {
            return 1
        } else {
            this.enviarMail(mailAdmin)
            return 0
        }
    }
}