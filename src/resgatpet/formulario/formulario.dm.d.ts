import { FormularioEntity } from "./formulario.entity";
export declare class FormularioArmazenados {
    #private;
    AdicionarFormulario(formulario: FormularioEntity): void;
    atualizaFormulario(id: string, dadosAtualizacao: Partial<FormularioEntity>): FormularioEntity;
    removeFormulario(id: string): Promise<FormularioEntity>;
    private buscaPorID;
    get Formularios(): FormularioEntity[];
}
