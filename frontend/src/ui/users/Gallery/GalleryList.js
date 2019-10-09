import React, { Component, Fragment } from 'react';
import './Gallery.scss';
import GalleryItem from './GalleryItem';
import axios from 'axios';
import Loader from '../../globalComponent/Loader';

class GalleryList extends Component {

    state = {
        publications: [],
        error: '',
        loading: true
    };

    componentDidMount() {
        axios.get('/api/gallery/all')
        .then(res => {
            this.setState({ loading: false, publications: res.data.publications })
        })
        .catch(err => {

        })
    }

    render() {
        return (
            <Fragment>
                <section className="publications-section-banner">
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-12 text-center">
                                <h2>Galerie</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="publications-section">
                    <div className="container">
                        {
                        this.state.loading ? <div className="d-flex justify-content-center"><Loader /></div> :
                            this.state.publications.map((pub, id) => (
                                <div className="row pt-5 gallery-row pb-5">
                                    <div className="col-sm-12 mt-4 mb-3">
                                        <GalleryItem key={id} content={pub.content} images={pub.images} date={pub.date} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </Fragment>
        );
    }
}


export default GalleryList;
