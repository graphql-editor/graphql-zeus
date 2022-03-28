/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: "enum",
	Mutation:{
		addCard:{
			card:{
				type:"createCard!"
			}
		}
	},
	createCard:{
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
		},
		Children:{
			type:"Int"
		}
	},
	Card:{
		attack:{
			cardID:{
				type:"[String!]!"
			}
		}
	},
	Query:{
		cardById:{
			cardId:{
				type:"String"
			}
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		addCard:"Card"
	},
	Subscription:{
		deck:"Card"
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
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
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
	EffectCard:{
		effectSize:"Float",
		name:"String"
	}
}