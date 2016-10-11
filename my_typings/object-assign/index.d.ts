declare interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
export = ObjectCtor;
