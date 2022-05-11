import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'

function Producto(props) {

    const { Datos,id } = props
    const mostrarproductosCantidad = Datos.order_backend
    const cantidadProductos = props.cantidadproductos;
    console.log(Datos.nombre)



    const styles = {
        img: {
            width: '100px',

            margin: '20px'
        }
    }



    
        return (
            <>
           

              

                <Col style={{margin: '5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"  style={styles.img} />
                        <Card.Body>
                            <Card.Title>{Datos.nombre}</Card.Title>
                            
                            <Card.Text>
                                ${Datos.precio}
                            </Card.Text>
                            <Button as={Link} to={'/producto/' + id} variant="primary">ver detalle</Button>
                            <Button as={Link} to={'/producto/modificar/' + id} variant="primary">modificar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>

        )

    }



export default Producto
