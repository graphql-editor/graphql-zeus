/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		cardById:{
			cardId:{
				type:"String"
			}
		}
	},
	SpecialSkills: "enum",
	Card:{
		attack:{
			cardID:{
				type:"[String!]!"
			}
		}
	},
	Mutation:{
		addCard:{
			card:{
				type:"createCard!"
			}
		}
	},
	createCard:{
		Children:{
			type:"Int"
		},
		Attack:{
			type:"Int!"
		},
		Defense:{
			type:"Int!"
		},
		skills:{
			type:"[SpecialSkills]!"
		},
		name:{
			type:"String!"
		},
		description:{
			type:"String!"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable"
	},
	Nameable:{
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		"...on EffectCard": "EffectCard",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		image:"String",
		name:"String",
		skills:"SpecialSkills"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Subscription:{
		deck:"Card"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	}
}