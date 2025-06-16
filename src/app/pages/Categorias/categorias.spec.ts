import { ComponentFixture, TestBed } from '@angular/core/testing';

// CORREÇÃO: Importando "CategoriasComponent" do arquivo correto.
// (Assumindo que o nome do arquivo é 'categorias.component.ts')
import { CategoriasComponent } from './categorias.component';

// CORREÇÃO: O teste agora é para o "CategoriasComponent"
describe('CategoriasComponent', () => {
  // CORREÇÃO: As variáveis usam o tipo correto
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CORREÇÃO: Estamos a importar o "CategoriasComponent" para o teste
      imports: [CategoriasComponent]
    })
    .compileComponents();

    // CORREÇÃO: Criamos uma instância do "CategoriasComponent"
    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});