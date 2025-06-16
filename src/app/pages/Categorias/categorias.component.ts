// ARQUIVO: categorias.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias = [
    { nome: 'Música', cor: '#DC148C', imagemUrl: 'https://i.pinimg.com/736x/1b/65/c4/1b65c492d21dda709a56856070d835f2.jpg' },
    { nome: 'Podcasts', cor: '#006450', imagemUrl: 'https://i.pinimg.com/736x/de/6d/9d/de6d9d40ad5f4ca6b519fd29000775c6.jpg' },
    { nome: 'Eventos ao vivo', cor: '#8400E7', imagemUrl: 'https://i.pinimg.com/736x/9c/8a/83/9c8a83c5b2ea1d49ca5dd11041048903.jpg' },
    { nome: 'Feito para você', cor: '#1E3264', imagemUrl: 'https://i.pinimg.com/736x/2c/4f/a8/2c4fa82b5f517de5a4afc17ef571d46d.jpg' },
    { nome: 'Lançamentos', cor: '#E8115B', imagemUrl: 'https://i.pinimg.com/736x/5a/03/6d/5a036dc8375fb419e69577bb441ef43d.jpg' },
    { nome: 'Brasil', cor: '#148854', imagemUrl: 'https://i.pinimg.com/736x/4a/77/1b/4a771b9b4a6813c88480fea111a2f8f0.jpg' },
    { nome: 'Sertanejo', cor: '#E0115F', imagemUrl: 'https://i.pinimg.com/736x/41/02/49/4102491027559b882ef0e372e22b12fa.jpg' },
    { nome: 'Funk', cor: '#19E68C', imagemUrl: 'https://i.pinimg.com/736x/40/d4/cf/40d4cf63fab18a0d4b3abc6a9f30ba79.jpg' },
    { nome: 'Paradas', cor: '#B49BC8', imagemUrl: 'https://i.pinimg.com/736x/9b/85/57/9b8557173666d437c41b06a132b3040b.jpg' },
    { nome: 'Paradas de podcast', cor: '#0D73EC', imagemUrl: 'https://i.pinimg.com/736x/17/f8/24/17f824eae953d7ff84ab72f263cff712.jpg' },
    { nome: 'Samba e pagode', cor: '#AF2896', imagemUrl: 'https://i.pinimg.com/736x/18/60/87/1860875ee254d23ebb3f80383c935b67.jpg' },
    { nome: 'Pop', cor: '#509BF5', imagemUrl: 'https://i.pinimg.com/736x/75/46/42/754642ef31c663b95428563b68d61918.jpg' },
    { nome: 'Hip Hop', cor: '#BA5D07', imagemUrl: 'https://i.pinimg.com/736x/93/9e/50/939e502bdd2f197d230b6c73cbc38f08.jpg' },
    { nome: 'Eletrônica', cor: '#2D46B9', imagemUrl: 'https://i.pinimg.com/736x/cc/9f/65/cc9f656a3ceafbbaadff13a1ce1bf1a1.jpg' }
  ];

  constructor() { }
}