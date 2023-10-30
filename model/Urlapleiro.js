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
        value:"",
        placeholder:"valaki@gmail.com",
        regex: "[A-Z][a-z]{2,15}",
       
    },

    phone:{
        megjelenes:"Elérhetőség",
        tipus:"phone",
        value:"",
        placeholder:"+368888888",
        regex:"[0-9]{3}-[0-9]{2}-[0-9]{3}"
    }

}