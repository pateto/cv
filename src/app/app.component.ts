import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  

  downloadPDF() {
  if (typeof window === 'undefined') return;

  import('html2pdf.js').then(html2pdf => {
    const element = document.getElementById('pdf-content');
    const opt = {
      margin: 0.5,
      filename: 'Alvaro-Caceres-CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      enableLinks: true,
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'],
        avoid: ['.avoid-break']
      }
    };

    html2pdf.default().set(opt).from(element).save();
  });
}


}
