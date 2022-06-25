import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  ropas:any[] = [
    {name: 'Chaqueta',
    img: 'https://images.unsplash.com/photo-1620906750272-747a93309812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    description: 'Chaqueta de cuero con detalles en el cuello'},
    {name: 'Conjunto deportivo',
    img: 'https://images.unsplash.com/photo-1535365229039-e36084b548f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description: 'Conjunto deportivo de algodón de manga larga'},
    {name: 'Camisa',
    img: 'https://www.patronesmil.es/wp-content/uploads/2017/05/camisa-ajustada-hombre.jpg',
    description: 'Camisa de algodón de manga larga'},
    {name: 'Vestidos estilo Jeans',
    img: 'https://i.ytimg.com/vi/hhGdUlAON8w/maxresdefault.jpg',
    description: 'Sandalias de algodón de manga corta'},
    {name: 'Traje',
    img: 'https://toquedemujer.com/wp-content/uploads/2014/03/Novios-de-Protocolo2.jpg',
    description: 'Pantalon de algodón de manga corta'},
    {name: 'Zapatos',
    img: 'https://laopinion.com/wp-content/uploads/sites/3/2020/10/shutterstock_1121151740.jpg?quality=60&strip=all&w=1200',
    description: 'Zapatos de algodón de manga corta'}
  ];

  constructor(private_config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}