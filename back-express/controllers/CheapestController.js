/* *****************************************************
*       ESTE DOCUMENTO CREA EL ÁRBOL DE BÚSQUEDA       *
********************************************************/

// Importamos conexion a la base de datos
import db from "../database/PlantasDB.js";

// Creamos la clase que administrará los nodos
class BinarySearchTreeNode {
    data;
    left;
    right;
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

// Creamos la estructura del árbol
class BinTree {
    constructor() {
        this.root = null;
    }

    // Método para añadir los datos al root
    insert(data) {
        const newNode = new BinarySearchTreeNode(data);

        if (this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    // Método para añadir los datos en los nodos correspondientes según el valor del precio
    insertNode(node, newNode) {
        if (newNode.data.precio < node.data.precio) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // Método que recorre el árbol a la derecha para encontrar el de menor de precio
    findMinNode(node) {
        if (node.left === null) return node.data;
        else return this.findMinNode(node.left);
    }

}

export const getCheapest = async (req, res) => {

    db.query('SELECT * FROM plantas WHERE stock > 0', (err, rows) => {
        if (err) throw err
        const BnTree = new BinTree()
        for (let i = 0; i < rows.length; i++) {
            BnTree.insert(rows[i])
        }
        const min = BnTree.findMinNode(BnTree.root)
        res.json(min)
    })

}