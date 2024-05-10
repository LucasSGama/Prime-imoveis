import React, { Component } from 'react';

class MapaGoogle extends Component {
  render() {
    return (
      <iframe
        title="Mapa do Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58448.934968253125!2d-46.69619516516859!3d-23.574340310887344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a0f75d1e09%3A0x301cb4b99bbfe2cf!2sS%C3%A3o%20Paulo%2C%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1632171886987!5m2!1spt-BR!2sus"
        // max-width="500"
        // height="400"
        className='MapaGoogle'
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    );
  }
}

export default MapaGoogle;
