const Grupos = require ("./model/grupo")

async function sorter(com_cursista){
    let sorted
    const grupos_ = await Grupos.find({}).populate('cursistas')
    let possible =[]
    for(i=0; i<grupos_.length; i++){
        let check = true
        grupos_[i].cursistas.forEach(element => {
            if(element.comunidade==com_cursista){
                console.log("carai")
                check=false
            }
        });
        if(check)
            possible.push({id:grupos_[i]._id, cor:grupos_[i].cor})
    }

    if(possible.length>0){
        sorted = possible[Math.floor(Math.random() * possible.length)]
    }else{
        const rand = grupos_[Math.floor(Math.random() * grupos_.length)]
        sorted = {id:rand._id, cor: rand.cor}
    }
         
    return {all:grupos_, sorted:sorted}
}

module.exports = sorter