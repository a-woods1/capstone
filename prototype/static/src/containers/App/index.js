import React from 'react';

/* application components */
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

/* global styles for app */
import './styles/app.scss';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
        children: React.PropTypes.node,
    };

    render() {
        return (
            <div id="app_container">
                <section>
                    <Header />
                    <div
                      style={{ marginTop: 10, paddingBottom: 250 }}
                    >
                        {this.props.children}
                    </div>
                    <div>
                        <Footer />
                    </div>
                </section>
            </div>
        );
    }
}

export { App };
