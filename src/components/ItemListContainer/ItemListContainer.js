import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
//import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from './ItemList'
import{Spinner} from 'react-bootstrap'


export const ItemListContainer =() =>  {

    const [items, setItems]= useState([])

    const {loading, setLoading} =  useContext(UIContext)

    const {categoryId} = useParams()

    useEffect(() =>{

        const db = getFirestore()
        const productos = categoryId 
                        ?db.collection('productos').where ('category', '==', categoryId)
                        : db.collection ('productos')

        productos.get ()
        .then((response) =>{
            const newItems = response.docs.map ((doc) =>{
            return {id: doc.id, ...doc.data()}
            })
            setItems (newItems)
        } )
        .catch(err => console.log(err))
        .finally(()=> {setLoading(false)}
        )
        
      /*  setLoading(true)

        pedirProductos()
        .then((res) =>{
            if (categoryId) {
                setItems(res.filter (prod => prod.category === categoryId))
            } else{
                setItems(res)
            }
        })
        .catch((err) => console.log(err))
        .finally (()=> {
            setLoading(false)
            console.log("Fin del llamado")
        }) */
    }, [categoryId, setLoading])
    
    return (
<section className="container my-5">  
 {  loading ? <Spinner animation="grow"/>
    : <ItemList productos={items}/>
}
</section>
    )
}

