import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark"> 
                <div class="container py-3">
                   <div className="row py-4 pt-5">
                        <div className="col">
                            <h5 className="text-center text-white">Copyright @2019. All rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;