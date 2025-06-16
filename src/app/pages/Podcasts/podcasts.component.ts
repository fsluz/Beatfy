import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podcasts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent {
  podcasts = [
    {
      nome: 'Flow Podcast',
      autor: 'Igor 3K & Monark',
      imagemUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop',
      cor: '#006450'
    },
    {
      nome: 'PodPah',
      autor: 'Igão & Mítico',
      imagemUrl: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop',
      cor: '#006450'
    },
    {
      nome: 'NerdCast',
      autor: 'Jovem Nerd',
      imagemUrl: 'https://i.scdn.co/image/ab6765630000ba8af98403d2282f57df937c5fb5',
      cor: '#006450'
    },
    {
      nome: 'Café Brasil',
      autor: 'Luciano Pires',
      imagemUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=400&fit=crop',
      cor: '#006450'
    },
    {
      nome: 'Braincast',
      autor: 'B9',
      imagemUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop',
      cor: '#006450'
    },

    { nome: 'RapaduraCast', autor: 'Cinema com Rapadura', imagemUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'Escriba Café', autor: 'Christian Gurtner', imagemUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'Projeto Humanos', autor: 'Ivan Mizanzuk', imagemUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'Pânico', autor: 'Jovem Pan', imagemUrl: 'https://www.cidademarketing.com.br/marketing/wp-content/uploads/2021/11/panico_jovempan.png', cor: '#006450' },
    { nome: 'Autoconsciente', autor: 'Regina Gianetti', imagemUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'Fronteiras da Ciência', autor: 'UFRGS', imagemUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'Durma com Essa', autor: 'Nexo Jornal', imagemUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'O Assunto', autor: 'Globo', imagemUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop', cor: '#006450' },
    { nome: 'História Preta', autor: 'Thiago André', imagemUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop', cor: '#006450' }
  ];

  constructor() { }
} 