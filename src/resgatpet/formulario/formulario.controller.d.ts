import { ListaFormularioDTO } from '../dto/formulario/listaFormulario.dto';
import { FormularioArmazenados } from './formulario.dm';
import { FormularioDTO } from '../dto/formulario/formulario.dto';
import { FormularioEntity } from './formulario.entity';
import { AtualizarFormularioDTO } from '../dto/formulario/atualizarFormulario.dto';
export declare class FormularioController {
    private clsFormularioArmazenados;
    constructor(clsFormularioArmazenados: FormularioArmazenados);
    RetornoFormulario(): Promise<ListaFormularioDTO[]>;
    CriaFormulario(dadosFormulario: FormularioDTO): Promise<{
        id: string;
        message: string;
    }>;
    atualizaFormulario(id: string, novosDados: AtualizarFormularioDTO): Promise<{
        formulario: FormularioEntity;
        message: string;
    }>;
    removeFormulario(id: string): Promise<{
        formulario: FormularioEntity;
        message: string;
    }>;
}
