export const urlapleiro ={
    nev:{
        megjelenes:"Név",
        tipus:"text",
        value:"",
        placeholder:"Én vagyok Batman",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
    },

    szulEv:{
        megjelenes:"Születési év",
        tipus:"number",
        value:"2000",
        regex: "[A-Z][a-z]{2,15}",
        min:1000,
        max:2000
    },

    email:{
        megjelenes:"Email cím",
        tipus:"email",
        placeholder:"valaki@gmail.com",
       
    },

    phone:{
        megjelenes:"Elérhetőség",
        placeholder:"+368888888",
        tipus:"phone",
        label:"tel",
        pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}"
    }

}