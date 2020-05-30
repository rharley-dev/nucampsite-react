import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { CAMPSITES } from '../shared/campsites'

class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsite: CAMPSITES
        }
    }

    renderCampsite(campsite) {
        return (
                <Card className='col-md-5 m-1'>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        );
    }

    renderComments(comments) {
        if(comments) {
            return (
                <div className='col-md-5 m-1'>
                    <h4>Comments</h4>
                    <div>
                        {comments.map(c => 
                            <div key={c.id}>
                                {c.text}
                                <div key={c.id}>{c.author} -- {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</div>
                                <br></br>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        return <div />
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className='row'>{this.renderCampsite(this.props.campsite)} {this.renderComments(this.props.campsite.comments)}</div>
            );
        }
        return <div />;
    }
}

export default CampsiteInfo