import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component{
    renderDish(dish){
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} value={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    RenderComments(comments){
        if(comments!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>comments</h4>
                    <ul className='List-unstyled'>
                        {comments.map((comment)=>{
                            return(
                                <li key={comments.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},{new 
                                    Intl.DateTimeFormat('en-US', 
                                    { year: 'numeric', month: 'short', 
                                    day: '2-digit'}).format(new Date
                                    (Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
        }else {
            return(<div></div>)
        }
    }
    
        render(){
            if (this.props.dish!=null){
                return (
                    <div className='container'>
                        <div className='row'>
                            {this.renderDish(this.props.dish)}
                            {this.RenderComments(this.props.dish.comments)}
                        </div>
                    </div>
                )

            }else{
                return (
                    <div></div>
                )
            }
        }
      
        }

export default DishDetail;