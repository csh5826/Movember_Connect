import React, { Fragment, Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Container from '@material-ui/core/Container';

mapboxgl.accessToken =
    'pk.eyJ1IjoiY3NoNTgyNiIsImEiOiJja2Y4ODRnbm0wNmRmMnlvMzJsZHllYWNmIn0.ahh2fZ9MyzBjG2ZAmfRzoQ';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: -78.9032316,
            lat: 35.9962091,
            zoom: 9
        };
    }
    //render the map on load of page
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
        });
        //changes the lng and lat to scroll correctly
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        return (
            <Fragment>
                <Container>
                <div className='col'>
                    <div>
                        Longitude: {this.state.lng} | Latitude: {this.state.lat} |
                        Zoom: {this.state.zoom}
                     </div>
                        <div ref={(el) => (this.mapContainer = el)} style={{height: 700}}/>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Map;
