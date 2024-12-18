$SRWConfig.itemEffects = function(){
	this.addDefinition(
		0, 
		"Ablative Plates", 
		"HP +2500", 
		false,
		false,
		function(actor, level){
			return [{type: "maxHP", modType: "addFlat", value: 2500}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		1, 
		"Large Generator", 
		"EN +50", 
		false,
		false,
		function(actor, level){
			return [{type: "maxEN", modType: "addFlat", value: 50}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		2, 
		"Silksteel Armor", 
		"Armor +500.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "base_arm", modType: "addFlat", value: 500}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		3, 
		"Reactive Boosters", 
		"Mobility +50.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "base_mob", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		4, 
		"Targeting Optimizer", 
		"Accuracy +50.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "base_acc", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		5, 
		"Precision Lens", 
		"Critical +50.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "crit", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		6, 
		"Overbooster", 
		"Move +2.", 
		false,
		false,
		function(actor, level){
			return [{type: "base_move", modType: "addFlat", value: 2},
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		7, 
		"Sniper Scope", 
		"Range +1.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "range", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		8, 
		"Regenerative (S)", 
		"250 HP recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "HP_regen_flat", modType: "addFlat", value: 250}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		9, 
		"Solar Panel (S)", 
		"5 EN recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "EN_regen_flat", modType: "addFlat", value: 5}];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		10, 
		"Rapturia Doll", 
		"+10 Tension at start of combat.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "start_will", modType: "addFlat", value: 10}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		11, 
		"Large Backpack", 
		"Weight +100", 
		false,
		false,
		function(actor, level){
			return [{type: "carrying_capacity", modType: "addFlat", value: 100}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		12, 
		"Hybrid Armor", 
		"Max HP +1250, Armor +250.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 1250},
				{type: "base_arm", modType: "addFlat", value: 250}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		13, 
		"Auxiliary Sensors", 
		"Mobility +25, Accuracy +25.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "base_mob", modType: "addFlat", value: 25},
			{type: "base_acc", modType: "addFlat", value: 25}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		14, 
		"Ace Algorithm", 
		"Accuracy +25, Critical +25.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "base_acc", modType: "addFlat", value: 25},
				{type: "crit", modType: "addFlat", value: 25}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		15, 
		"Turbo Motor", 
		"Mobility +25, Movement +1.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "base_mob", modType: "addFlat", value: 25},
			{type: "base_move", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		16, 
		"Capacity Frame", 
		"Max HP +1250, Max EN +25.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 1250},
				{type: "maxEN", modType: "addFlat", value: 25}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		17, 
		"Apogee Motor", 
		"Max EN +25, Movement +1.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "maxEN", modType: "addFlat", value: 25},
			{type: "base_move", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		18, 
		"Point-blank Assistant", 
		"Minimum Range of all Weapons becomes 1.", 
		false,
		true,
		function(actor, level){			
			return [{type: "min_range", modType: "addFlat", value: 10}];			
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		19, 
		"Laplace Calculator", 
		"Unit Hit% becomes 100% if above 75%, and enemy Hit% becomes 0% if below 25%. +10 Mobility, +10 Accuracy, +5 Critical.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "causality_manip", modType: "addFlat", value: 1}
				{type: "base_mob", modType: "addFlat", value: 10},
				{type: "base_acc", modType: "addFlat", value: 10}
				{type: "crit", modType: "addFlat", value: 5},
			];
		},
		function(actor, level){
			return true;
		},
		null
		1000
	);
	this.addDefinition(
		20, 
		"Maxwell Circuit", 
		"Unit ignores Evasion decay. Mobility +25.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "ignore_evasion_decay", modType: "addFlat", value: 1},
				{type: "base_mob", modType: "addFlat", value: 25},
			];
		},
		function(actor, level){
			return true;
		},
		null
		1000
	);
	this.addDefinition(
		21, 
		"Supply Cable", 
		"Provides 10 EN regen when in reach of the Tiamat", 
		false,
		false,
		function(actor, level){
			return [{type: "EN_regen_flat", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			const providerMechId = 20;//this is the mech id of the unit providing the regen field
			const activationDistance = 4;
			var targetActor = $statCalc.getCurrentPilot(providerMechId);
			if(targetActor){
				try {
					let providerEvent = $statCalc.getReferenceEvent(targetActor);
					let receptorEvent = $statCalc.getReferenceEvent(actor);
					if(providerEvent && receptorEvent){
						let deltaX = Math.abs(providerEvent.posX() - receptorEvent.posX());
						let deltaY = Math.abs(providerEvent.posY() - receptorEvent.posY());
						if(deltaX + deltaY <= activationDistance){
							return true;
						}
					}
				} catch(e){
					
				}				
			}
			return false;
		}
		null,
		1000
	);
	this.addDefinition(
		22, 
		"Overclock Reactor", 
		"+2 Movement, +1 Range, consumes 5 EN at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "EN_regen_flat", modType: "addFlat", value: -5},
			{type: "base_move", modType: "addFlat", value: 2},
			{type: "range", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
		null
		1000
	);
	this.addDefinition(
		23, 
		"Defensive Frame", 
		"+2500 HP, +500 Armor, -500 Weapon Power.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "maxHP", modType: "addFlat", value: 2500},
			{type: "base_arm", modType: "addFlat", value: 500},
			{type: "weapon_ranged", modType: "addFlat", value: -500},
			{type: "weapon_melee", modType: "addFlat", value: -500}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		24, 
		"Overaccelerator", 
		"+4 Movement, -50 Accuracy.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "base_move", modType: "addFlat", value: 4},
			{type: "base_acc", modType: "addFlat", value: -50}
			];
		},
		function(actor, level){
			return true;
		}
		null
		1000
	);
	this.addDefinition(
		25, 
		"Oversensor", 
		"+2 Range, -50 Mobility.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "range", modType: "addFlat", value: 2},
			{type: "base_mob", modType: "addFlat", value: -50}
			];
		},
		function(actor, level){
			return true;
		}
		null
		1000
	);
	this.addDefinition(
		26, 
		"Hyper Reloader", 
		"Resupplies all Ammo at the start of turn. Maximum Energy -25.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "ammo_regen", modType: "addFlat", value: 100},
			{type: "maxEN", modType: "addFlat", value: -25},
			];
		},
		function(actor, level){
			return true;
		}
		null
		1000
	);
	this.addDefinition(
		27, 
		"Omniframe", 
		"All Mech and Weapon terrain rankings become A.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 3},
				{type: "air_terrain_rating", modType: "addFlat", value: 3},
				{type: "water_terrain_rating", modType: "addFlat", value: 3},
				{type: "space_terrain_rating", modType: "addFlat", value: 3}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		28, 
		"Omniframe Plus", 
		"All Mech and Weapon terrain rankings become S, consumes 5 En at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "EN_regen_flat", modType: "addFlat", value: -5},
				{type: "land_terrain_rating", modType: "addFlat", value: 4},
				{type: "air_terrain_rating", modType: "addFlat", value: 4},
				{type: "water_terrain_rating", modType: "addFlat", value: 4},
				{type: "space_terrain_rating", modType: "addFlat", value: 4}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		29, 
		"Flight Module", 
		"Mech and Weapon Air terrain rankings become S. Enables Flight.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "air_terrain_rating", modType: "addFlat", value: 4},
				{type: "fly", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		30, 
		"Drill Module", 
		"Mech and Weapon Land terrain rankings become S. Enables underground movement.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 4},
				{type: "dig_enabled", modType: "addFlat", value: 1}			
				];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		31, 
		"Maritime Module", 
		"Mech and Weapon Water terrain rankings become S. Improves water movement.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "water_terrain_rating", modType: "addFlat", value: 4},
				{type: "water_enabled", modType: "addFlat", value: 2}
			];
		},
		function(actor, level){
			return true;
		},
		null,
		1000
	);
	this.addDefinition(
		32, 
		"Symbiotic Module", 
		"Mech and Weapon Fungal terrain rankings become S. +5 Tension at the start of a mission in Fungal terrain.", 
		false,
		false,
		function(actor, level){
			return [
					{type: "space_terrain_rating", modType: "addFlat", value: 4},
					{type: "start_will", modType: "addFlat", value: 5}
					];
		},
		function(actor, level){
			const refEvent = $statCalc.getReferenceEvent(actor);
				const currentTerrain = $gameMap.regionId(refEvent.posX(), refEvent.posY()) % 8;
			return currentTerrain === 5;
		},
		null,
		1000
	);
	this.addDefinition(
		33, 
		"All-Terrain", 
		"Negates terrain penalties, doubles terrain bonuses.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "terrain_adept", modType: "addFlat", value: 1},
				{type: "terrain_master", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;	
		}
		null
		1000
	);
	this.addDefinition(
		34, 
		"Double Image (S)", 
		"10% chance to evade any attack at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "DOUBLE IMAGE", value: 0.1, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
		null,
		1000
	);
	this.addDefinition(
		35, 
		"Barrier Field (S)", 
		"Reduces all damage by 500. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "all", value: 500, cost: 5}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		36, 
		"Arm Shield", 
		"20% chance to block a melee weapon at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "melee", activation: "random", name: "SHIELD", value: 0.2, dodgePattern: 2}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
		null,
		1000
	);
	this.addDefinition(
		37, 
		"Chaff Dispenser", 
		"20% chance to block a melee weapon at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "ranged", activation: "random", name: "CHAFF", value: 0.2, dodgePattern: 2}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
		null,
		1000
	);
	this.addDefinition(
		38, 
		"Friction Field", 
		"Reduces all material weapon damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "mat", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		39, 
		"Beam Coating", 
		"Reduces all beam weapon damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "beam", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		40, 
		"Electronic Cloaking System", 
		"20% chance to evade a single target weapon at 110 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "single", activation: "random", name: "ECS", value: 0.2, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 110 ? "on" : "off";
		}
		null,
		1000
	);
	this.addDefinition(
		41, 
		"Learning Computer", 
		"30% chance to evade any attack at 130 Tension or higher.", 
		false,
		false,
		function(actor, level){
			return [{type: "special_evade", subType: "all", activation: "random", name: "SPECIAL EVASION", value: 0.3, dodgePattern: 1}];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130;
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 130 ? "on" : "off";
		}
		null,
		1000
	);
	this.addDefinition(
		42, 
		"Bunker Field", 
		"Reduces all twin or mapw weapon damage by 1000. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "reduction_barrier", subType: "multi", value: 1000, cost: 5}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		43, 
		"Absolute Territory", 
		"Cancels an attack if damage is below 1500. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "threshold_barrier", subType: "all", value: 1800, cost: 15}];
		},
		function(actor, level){
			return true;
		}
		null,
		1000
	);
	this.addDefinition(
		44, 
		"Maintenance Kit", 
		"Gain the Repair and Resupply commands.", 
		false,
		false,
		function(actor, level){
			return [
			{type: "heal", modType: "addFlat", value: 1},
			{type: "resupply", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);	
	this.addDefinition(
		45, 
		"Magnetic Coating", 
		"The unit counters first during the enemy phase.", 
		true,
		false,
		function(actor, level){
			return [{type: "counter_rate", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
		null
		1000
	);

	this.addDefinition(
		46, 
		"Holographic Attacker", 
		"Ignores Support Defense.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "disable_support", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;		
		},
		null
		1000
	);
	this.addDefinition(
		47, 
		"Internal Fortification",
		"Prevents all status conditions.",
		false,
		false,
		function(actor, level){
			return [
				{type: "status_resistance", modType: "addFlat", value: 1}			
			];
		},
		function(actor, level){
			return true;		
		}
	);
	this.addDefinition(
		48, 
		"Beast Mode", 
		"When casting Wall, Drive is also cast.", 
		false,
		true,
		function(actor, level){
			return [{type: "great_wall", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		},
		null
		1000
	);
	this.addDefinition(
		49, 
		"Limit Engine", 
		"Automatically cast Fury at the start of the player turn at 125 Will or higher.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 36} //fury
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 125;
		},
		null
		1000
	);
	this.addDefinition(
		50, 
		"Natural Glow Fruit", 
		"Automatically cast Zeal at the start of the player turn at 150 Will or higher once per stage.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "auto_spirit", modType: "addFlat", value: 2}
			];
		},
		function(actor, level){
			return $statCalc.getCurrentWill(actor) >= 150 && !$statCalc.getUsedCount(actor, "auto_spirit_pilot_50");
		},
		null
		1000
	);
	this.addDefinition(
		51, 
		"Super Repair Kit", 
		"Restore all HP, EN and Ammo once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "HP_recover", modType: "addFlat", value: 100},
				{type: "EN_recover", modType: "addFlat", value: 100},
				{type: "ammo_recover", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return $statCalc.canRecoverHP(actor) || $statCalc.canRecoverEN(actor) || $statCalc.canRecoverAmmo(actor);
		},
		{
			type: "spirit",
			animId: "Resupply"
		},
		null
		1000
	);
	this.addDefinition(
		52, 
		"TTRPG Manual", 
		"Restore 30 SP once per episode.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "SP_recover", modType: "addFlat", value: 30}
			];
		},
		function(actor, level){
			return $statCalc.canRecoverSP(actor);	
		},
		{
			type: "repair",
			animId: "Resupply"
		},
		1000
	);	
	this.addDefinition(
		53, 
		"Limit Break Code", 
		"Damage dealt +25%, damage taken -25% for one turn. Can only be used once per episode.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "victory_turn", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		},
		{
			type: "spirit",
			animId: "Drive"
		},
		null,
		1000
}