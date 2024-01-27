import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
export declare class strongPassValidator implements ValidatorConstraintInterface {
    validate(value: string, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const SenhaForte: (opcaoValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
