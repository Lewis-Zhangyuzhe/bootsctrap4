import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
          selectedDish: null
        };
        // console.log('Menu component constructor is called');
    }

    // componentDidMount() {
    //   console.log('Menu component componentDidMount is called');
    // }

    onDishSelect(dish) {
      this.setState({
        selectedDish: dish
      });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width='100%' object src={dish.image} alt={dish.name} /> 
                  <CardImgOverlay body className="ml-5">
                    <CardTitle heading>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        // console.log('Menu component render is called');

        return (
          <div className="container">
            <div className="row">
              {menu}          
            </div>
            <DishDetail dish={this.state.selectedDish}></DishDetail>
          </div>
        );
    }
}

export default Menu;