import React, { Component, Fragment } from 'react';
import EventItem from './EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Loader from '../../globalComponent/Loader';
import axios from 'axios';
import './Events.scss';
import Filter from '../Filter/Filter';
class Events extends Component {

    state = {
        loading: true,
        events: [],
        error: ''
    }

    componentDidMount() {
        if(this.props.isHomePage) {
            axios.get("/api/event/4")
            .then(res => {
                this.setState({ loading: false, events: res.data.events, error: '' })
            })
            .catch(err => {
                this.setState({ loading: false, error: 'Une erreur s\'est produite. Veuillez recharger la page' })
            })
        } else if(this.props.isCategoryPage) {
            this.setState({ events: this.props.events, loading: false, error: '' })
        } else if (this.props.isFilterPage) {
            this.setState({ events: this.props.events, loading: false, error: '' })
        } else {
            axios.get("/api/event/validated/all")
            .then(res => {
                this.setState({ loading: false, events: res.data.events, error: '' })
            })
            .catch(err => {
                this.setState({ loading: false, error: 'Une erreur s\'est produite. Veuillez recharger la page' })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.events !== prevProps.events) {
            if (this.props.isCategoryPage || this.props.isFilterPage) {
                this.setState({events: this.props.events, loading: false, error: ''})
            }
        }
    }

    render() {
        const {error, events, loading} = this.state;
        return (
            <Fragment>
                {!this.props.isHomePage&&<Filter />}
                <section className="events pt-5 bgWhite" id="events">
                    <div className="container pb-5">
                        <div className="row pt-5">
                            <div className="col-sm-12">
                                <h3 className={this.props.isHomePage ? "event-header text-center" : "pt-4 pb-1 event-header text-left"}>
                                    {this.props.eventType}
                                </h3>
                            </div>
                        </div>
                        <div className={loading || error.length || this.props.isHomePage? "row pb-5 mb-2 justify-content-center":"row pb-5 mb-3 px-2"}>
                            {error&&error.length ? <div className="alert alert-danger">{error}</div>:null}
                            {
                                loading ? <div className="d-block ml-auto mr-auto justify-content-center"><Loader/></div>:
                                    events&&events.length ?
                                        events.map((event, id) => (
                                            <div key={id} className="col-sm-12 col-md-6 col-lg-3 mt-3">
                                                <EventItem event={event} />
                                            </div>
                                        )): null
                            }
                            {!loading&&events.length === 0 &&!error.length ? <div className="d-block ml-auto mr-auto justify-content-center"><h5>Aucune Actualité</h5></div>:null}
                        </div>
                        {
                            this.props.isHomePage&&events.length !==0 ?
                            <div className="row pb-5">
                                <div className="col all_events">
                                    <a href="/events">Voir plus</a>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div> : null
                        }
                        {
                            this.props.showMore&&events.length !==0 ?
                            <div className="row pb-5">
                                <div className="col all_events">
                                    <a href={"/events/category/"+this.props.category}>Voir plus</a>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div> : null
                        }
                    </div>
                </section> 
            </Fragment>
        );
    }
}

export default Events;