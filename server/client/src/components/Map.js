import React, { Fragment, Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParticipants } from '../actions'
import '../style.css';


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
        this.props.fetchParticipants()
        console.log('props in map are', this.props.participants)
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
        // hardcoded markers added to our map
         new mapboxgl.Marker()
    .setLngLat([  -78.901318, 35.995930 ])
    .addTo(map);
    new mapboxgl.Marker()
    .setLngLat([  -79.901318, 35.995930 ])
    .addTo(map);
    }

    render() {
        return (
            <Fragment>
                <Container>
                        <div className='sidebarStyle' style={{backgroundColor: '#800000', color: '#FFFFFF'}}>
                            Longitude: {this.state.lng} | Latitude: {this.state.lat} |
                            Zoom: {this.state.zoom}
                        </div>
                            <div className='mapContainer' ref={(el) => (this.mapContainer = el)}/>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return { participants: state.participants }; 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchParticipants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
