import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    '/Barco%20jami.jpeg',
    '/Barco%20jami2.jpeg',
    '/Carga%20Jami.jpeg',
    '/Furgoneta%20Jami.jpeg'
  ];
  currentSlideIndex = 0;
  slideInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.stopSlider();
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 2500);
  }

  stopSlider() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.cdr.detectChanges();
  }

  nextSlideManual() {
    this.nextSlide();
    this.startSlider();
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.startSlider();
    this.cdr.detectChanges();
  }

  setSlide(index: number) {
    this.currentSlideIndex = index;
    this.startSlider();
    this.cdr.detectChanges();
  }

  values = [
    {
      icon: '✓',
      title: 'Seguridad',
      text: 'Tus envíos protegidos en cada paso de la cadena logística.',
      color: 'icon-blue'
    },
    {
      icon: '◉',
      title: 'Responsabilidad',
      text: 'Cumplimos con tiempos y cuidados para cada envío.',
      color: 'icon-red'
    },
    {
      icon: '◔',
      title: 'Atención personalizada',
      text: 'Te acompañamos y asesoramos en todo momento.',
      color: 'icon-yellow'
    }
  ];

  services = [
    {
      icon: '📦',
      title: 'Envío de Cajas y Paquetes',
      text: 'Transporte seguro y eficaz de todo tipo de cajas y paquetes.'
    },
    {
      icon: '📋',
      title: 'Documentación Aduanera',
      text: 'Gestión completa de trámites y documentos para tus envíos internacionales.'
    },
    {
      icon: '🏠',
      title: 'Mudanzas Internacionales',
      text: 'Simplificamos el traslado de tus pertenencias al extranjero.'
    },
    {
      icon: '🚚',
      title: 'Servicio Puerta a Puerta',
      text: 'Recogemos y entregamos tus envíos donde lo necesites.'
    }
  ];

  faqs = [
    {
      icon: '📦',
      question: '¿Qué incluye el precio de las cajas de 80x50x50 desde 100€?',
      answer: 'El precio base desde 100€ incluye la entrega en almacén. Para entregas en otros destinos o modalidades específicas pueden aplicarse tarifas adicionales que te confirmamos al momento de cotizar.'
    },
    {
      icon: '🚚',
      question: '¿Cómo funciona la recogida a domicilio en Barcelona y alrededores?',
      answer: 'Nos desplazamos directamente a tu domicilio en Barcelona, Sabadell, Terrassa, L’Hospitalet, Ripollet y todo el Vallès Occidental para recoger tus cajas, tanques o bultos sin que tengas que cargar con nada.'
    },
    {
      icon: '⏱️',
      question: '¿Cuánto tiempo tarda en llegar el envío a la República Dominicana?',
      answer: 'El tiempo estimado de transporte marítimo transatlántico garantiza un flujo constante y seguro. Te informamos de las fechas estimadas de salida y llegada exacta al coordinar tu bulto.'
    },
    {
      icon: '📍',
      question: '¿A qué zonas de la República Dominicana llega la entrega?',
      answer: 'Realizamos entregas en Santo Domingo (incluyendo Santo Domingo Este), Santiago y todo el territorio nacional de la República Dominicana con nuestra propia logística.'
    },
    {
      icon: '🛋️',
      question: '¿También gestionáis mudanzas completas y electrodomésticos?',
      answer: 'Sí. Además de nuestras cajas de 80×50 cm y tanques/bidones azules herméticos, somos especialistas en trasladar electrodomésticos, muebles y mudanzas de hogar integrales.'
    }
  ];

  sections = [
    {
      title: 'Sobre Nosotros',
      text: 'Conoce quiénes somos, qué hacemos y qué distingue a JamiEnvios.',
      link: '/nosotros'
    },
    {
      title: 'Historia',
      text: 'Descubre cómo nació el proyecto y cómo fue creciendo con los años.',
      link: '/historia'
    },
    {
      title: 'Servicios',
      text: 'Explora todas las soluciones de envío, mudanza y carga comercial.',
      link: '/servicios'
    },
    {
      title: 'Experiencia',
      text: 'Mira nuestros tiempos estimados, principios y visión de futuro.',
      link: '/experiencia'
    }
  ];
}