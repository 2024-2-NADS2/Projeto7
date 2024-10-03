class MainClass {
    constructor(nome) {
        this.nome = nome;
    }

    greet() {
        return `Olá, ${this.nome}! Bem-vindo ao sistema!`;
    }
}

export default MainClass;