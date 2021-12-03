"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnTypes = exports.AllTypesProps = void 0;
exports.AllTypesProps = {
    createCard: {
        Attack: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: true
        },
        Defense: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: true
        },
        skills: {
            type: "SpecialSkills",
            array: true,
            arrayRequired: false,
            required: true
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        Children: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    Query: {
        cardById: {
            cardId: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    Mutation: {
        addCard: {
            card: {
                type: "createCard",
                array: false,
                arrayRequired: false,
                required: true
            }
        }
    },
    SpecialSkills: "enum",
    Card: {
        attack: {
            cardID: {
                type: "String",
                array: true,
                arrayRequired: true,
                required: true
            }
        }
    }
};
exports.ReturnTypes = {
    EffectCard: {
        effectSize: "Float",
        name: "String"
    },
    S3Object: {
        bucket: "String",
        key: "String",
        region: "String"
    },
    ChangeCard: {
        "...on SpecialCard": "SpecialCard",
        "...on EffectCard": "EffectCard"
    },
    CardStack: {
        cards: "Card",
        name: "String"
    },
    Query: {
        cardById: "Card",
        drawCard: "Card",
        drawChangeCard: "ChangeCard",
        listCards: "Card",
        myStacks: "CardStack",
        nameables: "Nameable"
    },
    Mutation: {
        addCard: "Card"
    },
    Subscription: {
        deck: "Card"
    },
    SpecialCard: {
        effect: "String",
        name: "String"
    },
    Nameable: {
        "...on EffectCard": "EffectCard",
        "...on CardStack": "CardStack",
        "...on SpecialCard": "SpecialCard",
        "...on Card": "Card",
        name: "String"
    },
    Card: {
        Attack: "Int",
        Children: "Int",
        Defense: "Int",
        attack: "Card",
        cardImage: "S3Object",
        description: "String",
        id: "ID",
        image: "String",
        name: "String",
        skills: "SpecialSkills"
    }
};
