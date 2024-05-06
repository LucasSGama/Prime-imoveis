import React, { useRef, useEffect } from "react";
import ItemCarrosel from "./ItemCarrosel";
import "./Carrosel.css"
import imoveis from "../../../DB/Imóveis";

export function Carrosel() {

    const carrosselRef = useRef(null);

  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const carrossel = carrosselRef.current;

    function handleMouseDown(e) {
      isDown = true;
      startX = e.pageX - carrossel.offsetLeft;
      scrollLeft = carrossel.scrollLeft;
      carrossel.style.cursor = 'grabbing';
    }

    function handleMouseLeave() {
      isDown = false;
      carrossel.style.cursor = 'grab';
    }

    function handleMouseUp() {
      isDown = false;
      carrossel.style.cursor = 'grab';
    }

    function handleMouseMove(e) {
      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - carrossel.offsetLeft;
      const walk = (x - startX) * 2;
      carrossel.scrollLeft = scrollLeft - walk;
    }

    carrossel.addEventListener('mousedown', handleMouseDown);
    carrossel.addEventListener('mouseleave', handleMouseLeave);
    carrossel.addEventListener('mouseup', handleMouseUp);
    carrossel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carrossel.removeEventListener('mousedown', handleMouseDown);
      carrossel.removeEventListener('mouseleave', handleMouseLeave);
      carrossel.removeEventListener('mouseup', handleMouseUp);
      carrossel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Este efeito será executado apenas uma vez após a montagem do componente


    
    return(
        <>
            <div className="scrool-horizontal" ref={carrosselRef}>
            {imoveis.map((imovel, index) => (
            <ItemCarrosel
                key={index}
                link={imovel.link}
                imagem={imovel.imagem}
                nome={imovel.nome}
                descricao={imovel.descricao}
            />
            ))}
            </div>
        </>
    );
}

export default Carrosel;