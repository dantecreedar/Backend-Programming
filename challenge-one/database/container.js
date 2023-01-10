import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import FilesSystem from '../utils/filesystem/read-write.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesystem = new FilesSystem()
const productsPath = path.join(__dirname + '/products.json')


class Container {

    save(product) {
        let productsDatabase = filesystem.read(productsPath)
        productsDatabase.push(product)
        filesystem.write(productsPath, JSON.stringify(productsDatabase))
    }

    getById(id) {
        const productsDatabase = filesystem.read(productsPath)
        const product = productsDatabase.find(product => product.id === id)

        const result = product ? product : null

        return result
    }

    getAll() {
        const productsDatabase = filesystem.read(productsPath)

        return productsDatabase
    }

    deleteById(id) {
        const productsDatabase = filesystem.read(productsPath)
        const products = productsDatabase.filter(product => product.id !== id)

        filesystem.write(productsPath, JSON.stringify(products))
    }

    deleteAll() {
        const products = [];

        filesystem.write(productsPath, JSON.stringify(products))
    }

}

export default Container