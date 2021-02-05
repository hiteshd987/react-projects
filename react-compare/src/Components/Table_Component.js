import React, { Component } from 'react'
import { Col, Table } from "react-bootstrap";

export class Table_Component extends Component {

    render() {
        const product = this.props.product;
        console.log(product);
        console.log("Inside Table");
        return (
        <Col>
         <Table className="tableProducts">
         <thead>
            <tr>
              <th></th>
              <th>{product.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Price</th>
              <td>{product.price}</td>     
            </tr>
            <tr>
              <th>Colors</th>
              <td>{product.colors}</td>
            </tr>
            <tr>
              <th>Condition</th>
              <td>{product.condition}</td>
            </tr>
          </tbody>
          {/* <thead>
            <p>{product.name}</p>
            <tr>
              <th></th>
              <th>Price($)</th>
              <th>Colors</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {(product).map(products => {
              return (
                <tr key={products.id}>
                  <td>{products.name}</td>
                  <td>{products.price}</td>
                  <td>{products.colors}</td>
                  <td>{products.condition}</td>
                </tr>
              );
            })}
          </tbody> */}
        </Table>
      </Col>
        )
    }
}

export default Table_Component
