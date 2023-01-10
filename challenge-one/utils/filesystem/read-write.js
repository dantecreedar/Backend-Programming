import fs from 'fs'



class FilesSystem {

    constructor(){}

    read(path){
        const data = JSON.parse(fs.readFileSync(path))
        return data
    }

    write(path, data){
        fs.writeFileSync(path, data, 'utf-8')
    }
}

export default FilesSystem