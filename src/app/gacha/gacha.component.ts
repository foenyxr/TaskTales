import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gacha',
  standalone: true,
  imports: [],
  templateUrl: './gacha.component.html',
  styleUrl: './gacha.component.css'
})
export class GachaComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('bgImage') bgImageRef!: ElementRef<HTMLImageElement>;

  private ctx!: CanvasRenderingContext2D;
  private balls: any[] = [];
  private dropBall: any = {};
  private colors = ['Iron Dagger', 'Flaming Sword', 'Leather Armor', 'Steel Helmet', 'Woolen Cloak', 'Cloak of Invisibility', 'Ring of Eternal Light'];
  private tAlpha = 0;
  private imgBG!: CanvasImageSource;

  constructor() {}

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.imgBG = this.bgImageRef.nativeElement;
    this.init();
  }

  init() {
    for (let i = 0; i < 200; i++) {
      const xDif = (Math.random() - 0.5) * 2;
      this.balls.push({
        x: 500 + 200 * Math.sin(xDif) * Math.random(),
        y: 225 + 250 * Math.cos(xDif),
        color: this.colors[Math.floor(Math.random() * this.colors.length)]
      });
    }
    requestAnimationFrame(() => this.draw());
  }

  draw = () => {
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.ctx.lineWidth = 10;
  
    if (this.imgBG) {
      this.ctx.drawImage(this.imgBG, 300, 75, 400, 750);
    }
  
    // Draw hole
    this.ctx.beginPath();
    this.ctx.arc(500, 760, 40, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fill();
    this.ctx.stroke();
  
    this.balls.forEach((b) => {
      this.drawBall(b.x, b.y, b.color);
    });
  
    if (this.dropBall.color) {
      if (this.dropBall.y < 105) {
        this.dropBall.y += 2;
      }
      this.drawBall(500, 750 + this.dropBall.y, this.dropBall.color);
  
      const text = `You received a ${this.dropBall.color}!`;
      this.tAlpha += 0.015;
      this.ctx.font = "42px Open Sans";
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = `rgba(0,0,0,${this.tAlpha})`;
      this.ctx.fillText(text, 500, 925);
    }
    requestAnimationFrame(this.draw);
  }

  onCanvasClick() {
    this.tAlpha = 0;
    this.dropBall.y = 0;
    this.dropBall.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private drawBall(ballX: number, ballY: number, ballColor: string) {
    this.ctx.beginPath();
    this.ctx.arc(ballX, ballY, 25, 0, 2 * Math.PI);
    this.ctx.fillStyle = ballColor;
    this.ctx.fill();
  }
}
