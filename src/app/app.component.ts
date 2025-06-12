import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';

  downloadPDF() {
    if (typeof window === 'undefined') return; // Avoid SSR crash

    import('html2pdf.js').then(html2pdf => {
      const element = document.getElementById('pdf-content');
      const opt = {
        margin: 0.5,
        filename: 'my-file.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        enableLinks: true
      };

      html2pdf.default().set(opt).from(element).save();
    });
  }

}
