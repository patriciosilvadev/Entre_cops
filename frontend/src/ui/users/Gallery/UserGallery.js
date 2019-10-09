import React, { Component, Fragment } from 'react';
import Header from '../../globalComponent/Header';
import { connect } from 'react-redux';
import Gallery from 'react-grid-gallery';
import Loader from '../../globalComponent/Loader';

class UserGallery extends Component {

    state = { images: [], loading: true, currentImage: 0};

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            let images = this.props.user.gallery.map((image, id) => (
                {
                    src: image,
                    thumbnail: image,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    isSelected: false,
                }
            ));
            this.setState({ images: images, loading: false })
        }
    }

    onCurrentImageChange(index) {
        this.setState({ currentImage: index });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <section>
                    <div className="container py-5 mt-5">
                        <div className="row py-5" style={{ backgroundColor: "white" }}>
                            <div className="col-sm-12 p-5"><h2 className="text-center display-4">Ma Galerie</h2></div>
                            <div className="col-sm-12 px-5 pt-0 pb-5" >
                                {
                                    this.state.loading ? <div className="d-flex justify-content-center"><Loader /></div>:
                                        this.state.images.length > 0 ?
                                        <Fragment>
                                            <Gallery 
                                                enableLightbox={true}
                                                enableImageSelection={false}
                                                images={this.state.images.reverse()}
                                                currentImageWillChange={this.onCurrentImageChange}
                                            />
                                        </Fragment>
                                        : <div className="d-flex justify-content-center py-5"><h4>Aucune image dans votre galerie.</h4></div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

const mapPropsToState = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapPropsToState)(UserGallery);
